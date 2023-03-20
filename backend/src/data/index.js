const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL);

const Todo = mongoose.model('Todo', {
  text: String,
  fecha: Date,
  done: Boolean,
});

module.exports = {
  Todo,
}

