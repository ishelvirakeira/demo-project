// server.js
const express = require('express');
const app = express();
const PORT = 2500;

app.use(express.static('public'))

const riddles = [
  {
    id: 1,
    riddle: "Iryo ryanka ntiriryamana n’iryemeye",
    options: ["Umutima", "Umutwe", "Inyenyeri"],
    answer: "Umutima",
    meaning: "The heart cannot rest with what it rejects."
  },
  {
    id: 2,
    riddle: "Akanyoni katagurutse ntikamenya iyo bweze",
    options: ["Umutwe", "Inyoni", "Imvura"],
    answer: "Inyoni",
    meaning: "A bird that does not fly, will never know where the harvest is."
  }
];

app.get('/api/riddles', (req, res) => {//returning JSON
  res.json(riddles);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));