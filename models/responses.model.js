var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResponseSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    lowercase: true
  },
  message: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Response', ResponseSchema);