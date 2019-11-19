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

let addMember = function(req, res) {
  console.log(req.body);
  let newDoc = new Member(req.body);
  newDoc.save((err, doc) => {
    if (err) {
      res.sendStatus(500);
      console.log(err);
    } else {
      res.sendStatus(200);
      console.log(doc, 'this is the doc saved');
    }
  });
};
let getAllMembers = function(req, res) {
  console.log('running find query on db');
  Member.find({}, (err, docs) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(docs);
      res.send(docs);
    }
  });
};
let removeMember = function(req, res) {
  Member.deleteOne({id: req.body.id}, (err, doc) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
      console.log(doc, 'this is the doc that was deleted');
    }
  });
};

module.exports.addMember = addMember;
module.exports.getAllMembers = getAllMembers;
module.exports.removeMember = removeMember;
