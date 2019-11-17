const express = require('express');

let app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

app.get('/mymembers', (req, res) => {
  //call a db query defined in db.models.js for all members saved by the user
});
