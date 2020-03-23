const express = require('express');

const app = express();

app.get('/sum', (req, res) => {
  const { a } = req.query;
  const { b } = req.query;
  
  const sum = parseInt(a) + parseInt(b);

  res.send(`The sum of ${a} and ${b} is ${sum}`);

});

app.listen(8000, () => console.log('Listening on port 8000'));