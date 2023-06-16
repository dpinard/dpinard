const express = require('express')
const app = express()
const port = 8000


const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  const userSchema = new mongoose.Schema({
    name: String
  });
  const Userd = mongoose.model('userd', userSchema);
  const userDam = new Userd({name: 'DAAAAM'})
  await userDam.save();
  const finder = await Userd.find();
  console.log(finder);
}



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  