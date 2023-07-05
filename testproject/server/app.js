const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser');
const md_hashPwd = require('./src/middleware/md-signup');
const md_signIn = require('./src/middleware/md-signin');
const md_tokenSession = require('./src/middleware/md_tokenSession');
const md_authToken = require('./src/middleware/md_authToken');
const User = require('./src/schema.js');
const Settings = require('./src/schema.js');

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test_pronostat');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', async (req, res) => {
  // const finder = await User.find();
  // res.send(finder);

  const user = await User.find().populate('settingsUser')
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



app.get('/follow', md_authToken, async (req, res) => {
  const setUser = new Settings({
    pseudo: req.body.pseudo,
    user: req.body.foo
  })
  setUser.save();

  res.json(req.body)
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  