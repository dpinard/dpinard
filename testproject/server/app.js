const express = require('express')
const app = express()
const port = 8000


const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
  
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  }

});
const User = mongoose.model('user', userSchema);
  

app.get('/', async (req, res) => {
  const finder = await User.find();
  res.send(finder);
})


/* 
donnees a verif :
email unique


*/
app.get('/signup', async (req, res) => {
  try {
    const user = new User({name: 'dam'})
    await user.save()
    res.status(200).send('utilisateur sign up');
  } catch (error) {
    res.send(error);

  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  