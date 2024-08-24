let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  Loses: 0,
  ties: 0,
};

updatescore();

function playGame(playermove) {
  computermove = pickComputerMove();
  result = "";
  if (playermove === "Scissor") {
    if (computermove === "Rock") {
      result = "You lose";
    } else if (computermove === "Scissor") {
      result = "tie";
    } else if (computermove === "Paper") {
      result = "You win";
    }
  } else if (playermove === "Paper") {
    if (computermove === "Rock") {
      result = "You win";
    } else if (computermove === "Scissor") {
      result = "You lose";
    } else if (computermove === "Paper") {
      result = "tie";
    }
  } else if (playermove === "Rock") {
    if (computermove === "Rock") {
      result = "tie";
    } else if (computermove === "Scissor") {
      result = "You win";
    } else if (computermove === "Paper") {
      result = "You lose";
    }
  }

  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.Loses += 1;
  } else if (result === "tie") {
    score.ties += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));

  updatescore();

  document.querySelector(".result").innerHTML = `${result}`;

  document.querySelector(".moves").innerHTML = `<b>You
<img class='rock-icon' src="${playermove}-emoji.png">
<img class='rock-icon' src="${computermove}-emoji.png">
Computer
`;
}
function updatescore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins : ${score.wins}, Loses :${score.Loses}, Ties :${score.ties}`;
}

function pickComputerMove() {
  const rn = Math.random();
  let computermove = "";
  if (rn >= 0 && rn < 1 / 3) {
    computermove = "Rock";
  } else if (rn >= 1 / 3 && rn < 2 / 3) {
    computermove = "Paper";
  } else {
    computermove = "Scissor";
  }
  return computermove;
}
