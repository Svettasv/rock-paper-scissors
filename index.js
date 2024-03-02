let userResultImage = document.querySelector(".user-image");

let computerResultImage = document.querySelector(".computer-image");

let result = document.querySelector(".result");

let userWins = document.querySelector(".wins");
let userLosses = document.querySelector(".losses");
let ties = document.querySelector(".tie");

let userWinsCount = 0;
let userLossesCount = 0;
let tieCount = 0;

let array = ["rock", "paper", "scissors"];
let fails = [
  { text: "Better luck next time!", audio: "audio/better_luck.wav" },
  { text: "Oops, almost there!", audio: "audio/almost_there.wav" },
  { text: "Not today, amigo!", audio: "audio/not_today.wav" },
];
let victories = [
  { text: "Epic win, high-five!", audio: "audio/epic_win.wav" },
  { text: "You nailed it, superstar!", audio: "audio/nailed_it.wav" },
  { text: "Victory dance time!", audio: "audio/victory_dance.wav" },
];

let tie = [
  { text: "Draw, you both rock!", audio: "audio/both_rock.wav" },
  { text: "Tied! Rematch!", audio: "audio/tied_again.wav" },
  { text: "Tie! rematch awaited!", audio: "audio/another_tie.wav" },
];

function playAudio(audioPath) {
  let audio = new Audio(audioPath);
  audio.play();
}

function rockClick() {
  userResultImage.setAttribute("src", "img/fist.svg");
  let randomIndex = Math.floor(Math.random() * array.length);
  let computerResult = array[randomIndex];
  let randomFail = fails[Math.floor(Math.random() * fails.length)];
  let randomVictory = victories[Math.floor(Math.random() * victories.length)];
  let randomTie = tie[Math.floor(Math.random() * tie.length)];

  if (computerResult == "rock") {
    computerResultImage.setAttribute("src", "img/fist.svg");
    result.innerText = randomTie.text;
    tieCount = tieCount + 1;
    ties.innerText = tieCount;
    playAudio(randomTie.audio);
  } else if (computerResult == "paper") {
    computerResultImage.setAttribute("src", "img/paper.svg");
    result.innerText = randomFail.text;
    userLossesCount = userLossesCount + 1;
    userLosses.innerText = userLossesCount;
    playAudio(randomFail.audio);
  } else {
    computerResultImage.setAttribute("src", "img/scissors.svg");
    result.innerText = randomVictory.text;
    userWinsCount = userWinsCount + 1;
    userWins.innerText = userWinsCount;
    playAudio(randomVictory.audio);
  }
}

function paperClick() {
  userResultImage.setAttribute("src", "img/paper.svg");
  let randomIndex = Math.floor(Math.random() * array.length);
  let computerResult = array[randomIndex];
  let randomFail = fails[Math.floor(Math.random() * fails.length)];
  let randomVictory = victories[Math.floor(Math.random() * victories.length)];
  let randomTie = tie[Math.floor(Math.random() * tie.length)];

  if (computerResult == "rock") {
    computerResultImage.setAttribute("src", "img/fist.svg");
    result.innerText = randomVictory.text;
    userWinsCount = userWinsCount + 1;
    userWins.innerText = userWinsCount;
    playAudio(randomVictory.audio);
  } else if (computerResult == "paper") {
    computerResultImage.setAttribute("src", "img/paper.svg");
    result.innerText = randomTie.text;
    tieCount = tieCount + 1;
    ties.innerText = tieCount;
    playAudio(randomTie.audio);
  } else {
    computerResultImage.setAttribute("src", "img/scissors.svg");
    result.innerText = randomFail.text;
    userLossesCount = userLossesCount + 1;
    userLosses.innerText = userLossesCount;
    playAudio(randomFail.audio);
  }
}

function scissorsClick() {
  userResultImage.setAttribute("src", "img/scissors.svg");
  let randomIndex = Math.floor(Math.random() * array.length);
  let computerResult = array[randomIndex];
  let randomFail = fails[Math.floor(Math.random() * fails.length)];
  let randomVictory = victories[Math.floor(Math.random() * victories.length)];
  let randomTie = tie[Math.floor(Math.random() * tie.length)];

  if (computerResult == "rock") {
    computerResultImage.setAttribute("src", "img/fist.svg");
    result.innerText = randomFail.text;
    userLossesCount = userLossesCount + 1;
    userLosses.innerText = userLossesCount;
    playAudio(randomFail.audio);
  } else if (computerResult == "paper") {
    computerResultImage.setAttribute("src", "img/paper.svg");
    result.innerText = randomVictory.text;
    userWinsCount = userWinsCount + 1;
    userWins.innerText = userWinsCount;
    playAudio(randomVictory.audio);
  } else {
    computerResultImage.setAttribute("src", "img/scissors.svg");
    result.innerText = randomTie.text;
    tieCount = tieCount + 1;
    ties.innerText = tieCount;
    playAudio(randomTie.audio);
  }
}

function clearAll() {
  userWinsCount = 0;
  userLossesCount = 0;
  tieCount = 0;
  userWins.innerHTML = "";
  userLosses.innerHTML = "";
  ties.innerHTML = "";
  result.innerHTML = "Let's start the game again!";
  computerResultImage.removeAttribute("src");
  userResultImage.removeAttribute("src");
}

function playaudio() {
  document.getElementById("audioPlayer").play();
}
