const db = require('./models.js');

let addMember = function(req, res) {
  db.save({req.body}, (err, doc) => {
    if(err) {
      res.sendStatus(500);
      console.log(err);
    } else {
      res.sendStatus(200);
      console.log(doc, 'this is the doc saved');
    }
  })
  
}
let getAllMembers = function(req, res) {
  db.find({}, (err, docs) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(docs);
    }
  })

}
let removeMember = function(req, res) {
  db.deleteOne({req.body.id}, (err, doc) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
      console.log(doc, 'this is the doc that was deleted');
    }
  })
}

module.exports.addMember = addMember;
module.exports.getAllMembers = getAllMembers;
module.exports.removeMember = removeMember;