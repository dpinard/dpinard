const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const md_hashPwd = require('./src/md_auth/md-signup');
const md_signIn = require('./src/md_auth/md-signin');
const md_tokenSession = require('./src/md_auth/md_tokenSession');
const md_authToken = require('./src/md_auth/md_authToken');
const { User } = require('./src/schema.js');
const { Settings } = require('./src/schema.js');
const { setGroup } = require('./src/schema.js');
const { md_newSetting } = require('./src/md_user/settings');
const { md_newSet } = require('./src/md_user/newSet');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/pronostat');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/test', (req, res) => {

  res.json({msg:'ceci est un texte test'})
})


app.get('/', async (req, res) => {
  // const finder = await User.find();
  // res.send(finder);

  // const user = await Settings.find().populate('stg').exec();
  const user = await User.find({})
  .populate('ofCourse')
  .populate('ofCourse1')
  .populate('friends')
  .exec();
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

app.get('/settings', [md_authToken, md_newSetting], async(req, res) => {
  res.json({msg:'nouveau setting', body: req.body})
})

app.get('/set', md_authToken, md_newSet, async (req, res) => {
  res.json({ msg: 'route set', body: req.body});
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  