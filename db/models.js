const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.on('open', () => {
  console.log('connected to mongoDB');
});

var memberSchema = new mongoose.Schema({
  id: String,
  short_title: String,
  first_name: String,
  last_name: String,
  party: String,
  state: String,
});

var Member = mongoose.model('Member', memberSchema);

module.exports = Member;
