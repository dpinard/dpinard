const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser');


const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
  
const userSchema = new mongoose.Schema({
  name: { type: String, unique: true,},
  hashPwd: { type: String, }

});
const User = mongoose.model('user', userSchema);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', async (req, res) => {
  const finder = await User.find();
  res.send(finder);
})

app.get('/signup', (req, res) => {
    const user = new User({name: 'mat'})

    res.send(req.body);

    // user.save()
      // .then(() => {
        // res.status(200).send('utilisateur sign up');
      // })
      // .catch((error) => {
        // res.send(error);
      // })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  