const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser');
const md_hashPwd = require('./src/middleware/md-signup');
const md_signIn = require('./src/middleware/md-signin');
const md_tokenSession = require('./src/middleware/md_tokenSession');
const md_authToken = require('./src/middleware/md_authToken');
const { User } = require('./src/schema.js');
const { Settings } = require('./src/schema.js');
const { setGroup } = require('./src/schema.js');

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/pronostat');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', async (req, res) => {
  // const finder = await User.find();
  // res.send(finder);

  // const user = await Settings.find().populate('stg').exec();
  const user = await User.find({}).populate('ofCourse').exec();
  // const user = await Settings.find({stg:'64a72a4ac5f54969da978020'}).exec();

  
  console.log(user);
  res.send(user);
})

app.get('/signup', (req, res) => {

})

app.post('/signup', md_hashPwd, (req, res) => {
  res.send({msg: req.body.msg});
})

app.get('/signin', md_authToken, (req, res) => {
  res.json({'protected by token': req.body});
})

app.post('/signin', [md_signIn, md_tokenSession], (req, res) => {
  res.json({msg: 'SIGN IN OK', 'token': req.body.token})
})



app.get('/settings', md_authToken, async(req, res) => {
  console.log('routeSettings');
  const setUser = new Settings({
    pseudo: req.body.pseudo,
    stg: req.body.foo,
  })
  setUser.save()
    .then(uId => {
      console.log(uId._id);
      User.findById({_id: uId.stg}).exec().then((res) => {
        console.log(res);
        res.ofCourse.push(uId._id);
        res.save();
      });
    }).catch(fId => {
      console.log('catch'+fId);
  });

  // const setUser= new User({
    // pseudo: req.body.pseudo,
    // ofCourse: req.body.foo,
  // })
  // setUser.save()
  // const user =  await User.findOne({email: 'test@test.com'}).populate('stg').then(result => {
    // console.log(result);
  // })
  // const user = await User.find().populate('stg').exec()
  console.log(setUser);
  res.json(req.body)
})

app.get('/set', md_authToken, async (req, res) => {
  console.log('route set');
  console.log(req.body.foo);
  
  let val='';
  // const set = setGroup.find({rel: req.body.foo}).populate('rel').exec().then(result => {
    const set = await setGroup.findOne({rel: req.body.foo}).exec().then(result => {
      console.log(result+'result')
      result.pseudoArray.push(req.body.pseudo)
      result.save()
      val = result
    }).catch(err => {
      console.log(err);
    });
    console.log(val)
  
  res.json({ msg: 'route set', body: req.body});
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  