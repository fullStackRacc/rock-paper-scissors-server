const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Game = {
  //Score count
  wins: 0,
  losses: 0,
  ties: 0,

  //Winning Pairs
  pairs: {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  },

  //Uses random to pick hand -- can be omitted if we go multiplayer
  randomChoice: () => {
    let i = Math.floor(Math.random() * 3);
    return (i = i === 0 ? "rock" : i === 1 ? "paper" : "scissors");
  },

  //This should run when the "play game" button is pressed
  playGame: (player, bot) => {
    console.log(`Player: ${player}`);
    console.log(`Bot: ${bot}`);
    //Stores a boolean for tie/win. we know if its not one of those then its a loss, so the logic is not needed
    let tie = player === bot;
    let win = Game.pairs[player] === bot;
    //Counts the score
    tie ? Game.ties++ : win ? Game.wins++ : Game.losses++;
    //Returns a string for the results
    return tie ? "TIE!" : win ? "WINNER WINNER CHICKEN DINNER!" : "LOSER";
  },
};

//Renders the index.ejs as the home page
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(PORT, (req, res) => {
  console.log(`Listening on ${PORT}`);
});

// for (let i = 0; i < 100; i++) {
//   console.log(Game.playGame(Game.randomChoice(), Game.randomChoice()));
//   console.log(`Wins: ${Game.wins}, Losses: ${Game.losses}, Ties: ${Game.ties}`);
// }
