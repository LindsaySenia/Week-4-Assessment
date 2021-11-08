const express = require("express");
const cors = require("cors");
const { 
  login,
  register
 } = require("./controller");
 const {
  getSongs,
  deleteSong,
  createSong,
  updateSong
} = require('./ratingController')


const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "In the end all things will be known",
    "It is better to be an optimist and proven a fool than to be a pessimist and be proven right.",
    "Love truth, but pardon error",
    "Listen to everyone. Ideas come from everywhere",
    "Please visit us at www.wontonfood.com"
  ];
  let randomFortIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomFortIndex];

  res.status(200).send(randomFortune);
});


app.post(`/api/login`, login);
app.post(`/api/register`, register);

app.get(`/api/songs`, getSongs)
app.delete(`/api/songs/:id`, deleteSong)
app.post(`/api/songs`, createSong)
app.put(`/api/songs/:id`, updateSong)


app.listen(4000, () => console.log("Server running on 4000"));
