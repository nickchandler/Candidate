const express = require('express');
const db = require('../db.queries');

let app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

app.use(express.json());
app.get('/mymembers', (req, res) => {
  db.getAllMembers(req, res);
});

app.post('/mymembers', (req, res) => {
  db.addMember(req, res);
});

app.delete('/mymembers', (req, res) => {
  db.removeMember(req, res);
});
