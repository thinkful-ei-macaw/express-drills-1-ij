const express = require('express');

const app = express();

app.get('/sum', (req, res) => {
  const { a } = req.query;
  const { b } = req.query;
  
  const sum = parseInt(a) + parseInt(b);

  res.send(`The sum of ${a} and ${b} is ${sum}`);

});

app.get('/cipher', (req, res) => {
  let { text } = req.query;
  let { shift } = req.query;
  console.log(text);
  text = text.toUpperCase();
  shift = parseInt(shift);

  const letters = text.split('').map(letter => {
    if(letter === ' ') return letter;
    return String.fromCharCode((((letter.charCodeAt(0) + shift) - 65) % 26) + 65)
  });

  res.send(letters.join(''));

});

app.listen(8000, () => console.log('Listening on port 8000'));