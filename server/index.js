const express = require('express');
const db = require('../db/models.js');

let app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

app.use(express.json());
app.get('/myMembers', (req, res) => {
  console.log('get req for user member list hits express server');
  db.getAllMembers(req, res);
});

app.post('/myMembers', (req, res) => {
  db.addMember(req, res);
});

app.delete('/myMembers', (req, res) => {
  db.removeMember(req, res);
});
