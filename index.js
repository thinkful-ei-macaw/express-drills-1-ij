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
    if (letter === ' ') return letter;
    return String.fromCharCode((((letter.charCodeAt(0) + shift) - 65) % 26) + 65)
  });

  res.send(letters.join(''));

});

app.get('/lotto', (req, res) => {
  let { nums } = req.query;
  let win = []
  for (let index = 0; index < 6; index++) {
    win.push(Math.floor(Math.random() * 20))
  }
  console.log(nums)
  let match = 0
  win.forEach((winNum, i) => {
    nums[i] == winNum ? match++ : null
  })
  console.log(win)
  let message = () => {
    switch (match) {
      case 6:
        return "Wow! Unbelievable! You could have won the mega millions!!"
        break;
      case 5:
        return "Congratulations! You win $100!"
        break
      case 4:
        return "Congratulations, you win a free ticket"
        break
      default: return "Sorry, you lose"
        break;
    }
  }
  res.send(message())
})
app.listen(8000, () => console.log('Listening on port 8000'));