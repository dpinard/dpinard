const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser');
const md_hashPwd = require('./src/middleware/md-signup');
const md_signIn = require('./src/middleware/md-signin');
const md_tokenSession = require('./src/middleware/md_tokenSession');
const User = require('./src/schema.js');

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', async (req, res) => {
  const finder = await User.find();
  res.send(finder);
})

app.get('/signup', (req, res) => {

})

app.post('/signup', md_hashPwd, (req, res) => {
  res.send({msg: req.body.msg});
})

app.get('/signin', (req, res) => {
  
})

app.post('/signin', [md_signIn, md_tokenSession], (req, res) => {
  res.send('SIGN IN OK')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  