// Game Settings
const cardCount = 12;
const cardRows = 7;
let difficulty = 0.1;

const cardTypes = [
  {
    img: "✨",
    sound: "../sounds/sparkle.mp3",
  },
  {
    img: "🔮",
    sound: "../sounds/cball.mp3",
  },
  {
    img: "😱",
    sound: "../sounds/evillaugh.mp3",
  },
  {
    img: "🎃",
    sound: "../sounds/pumpkin.mp3",
  },
  {
    img: "🌙",
    sound: "../sounds/moon.mp3",
  },
  {
    img: "🦇",
    sound: "../sounds/bat.mp3",
  },
  {
    img: "🕸️",
    sound: "../sounds/spider.mp3",
  },
  {
    img: "🍁",
    sound: "../sounds/leaf.mp3",
  },
  {
    img: "🧙‍♀️",
    sound: "../sounds/witch.mp3",
  },
  {
    img: "🧛🏽‍♂️",
    sound: "sounds/vampire.mp3",
  },
  {
    img: "🧟‍♀️",
    sound: "../sounds/zombie.mp3",
  },
  {
    img: "👁️",
    sound: "../sounds/squish.wav",
  },
  {
    img: "🧹",
    sound: "../sounds/broom.mp3",
  },
  {
    img: "🦹🏽",
    sound: "../sounds/doorbell.mp3",
  },
  {
    img: "🍬",
    sound: "../sounds/candy.mp3",
  },
  {
    img: "🍫",
    sound: "../sounds/chocolate.mp3",
  },
  {
    img: "🍭",
    sound: "../sounds/lollipop.mp3",
  },
];

// Game Logic

const grid = document.querySelector("#grid");
let score = 0;
let createdCards = [];
let flippedCards = [];

// Create the board


function createCard() {
  let randomCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];

  let card = document.createElement("button");
  card.classList.add("text-xxl");
  card.classList.add("text-center");
  card.setAttribute("data-id", randomCard.img);
  card.setAttribute("data-sound", randomCard.sound);
  card.setAttribute("data-flipped", false);
  card.innerText = "🪦";
  return card;
}

function createRows(number) {
  // create the number of rows
  for (let i = 0; i < number; i++) {
    let row = document.createElement("div");
    row.classList.add("spread", "c-mt-1", "c-mr-1", "c-rounded-11", "fade-in");
    grid.appendChild(row);

    // create 6 cards in each row
    for (let j = 0; j < cardCount; j++) {
      let card = createCard();
      row.appendChild(card);
    }
  }
}

function flipCard(card) {
  card.setAttribute("data-flipped", true);
  card.innerText = card.getAttribute("data-id");
}

function unflipCard(card) {
  card.setAttribute("data-flipped", false);
  card.innerText = "👻";
  card.classList.add("ghost");
}

function checkForMatch() {
    let sound = flippedCards[0].getAttribute("data-sound");
    if (flippedCards.length === 2) {
        if (
            flippedCards[0].getAttribute("data-id") ===
            flippedCards[1].getAttribute("data-id")
        ) {
            lockMatch();
            updateScore();
            playSound(sound);
            console.log("match!!")
        } else {
            console.log("no match");
            setTimeout(() => {
            unflipCard(flippedCards[0]);
            unflipCard(flippedCards[1]);
            flippedCards = [];
            scrambleRemainingCards();
            }, 400);
        }
    }
}

function scrambleRemainingCards() {
  // rigger 10% of the time
  let random = Math.random();
  if (random < difficulty) {
    playSound("../sounds/skulls.mp3");
    let remainingCards = document.querySelectorAll(
      "button[data-id]:not(.purple)"
    );
    for (let i = 0; i < remainingCards.length; i++) {
      let randomCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
      remainingCards[i].setAttribute("data-id", randomCard.img);
      remainingCards[i].setAttribute("data-sound", randomCard.sound);
      // rotate the card as a skull
      remainingCards[i].innerText = "💀";
      remainingCards[i].classList.remove("ghost");
      // for half of the remaining cards, add hte rotate class
      let chaos = Math.random();
      if (chaos < 0.6) {
        remainingCards[i].classList.add("rotate");
      } else if (chaos > 0.6) {
        remainingCards[i].classList.add("shrink");
      }

      setTimeout(() => {
        remainingCards[i].classList.remove("rotate");
        remainingCards[i].classList.remove("shrink");
        remainingCards[i].innerText = "🪦";
      }, 2000);
    }
  }
}

function handleClick(event) {
  let card = event.target;
  if (
    card.getAttribute("data-flipped") === "false" &&
    flippedCards.length < 2 &&
    !card.classList.contains("rotate")
  ) {
    flipCard(card);
    flippedCards.push(card);
    checkForMatch();
  }
}

function lockMatch() {
  flippedCards[0].classList.add("purple");
  flippedCards[0].classList.remove("ghost");
  flippedCards[1].classList.add("purple");
  flippedCards[1].classList.remove("ghost");
  flippedCards = [];
  // wait half a second before checking for remaining cards
  setTimeout(() => {
    checkRemainingCards();
  }, 500);
}

function updateScore() {
  let scoreBoard = document.querySelector("#score");
  scoreBoard.innerText = score;
  score++;
}

function checkRemainingCards() {
  // check all divs in the grid with a data-id that do not have the class purple
  let remainingCards = document.querySelectorAll(
    "button[data-id]:not(.purple)"
  );
  let unmatched = [];
  for (let i = 0; i < remainingCards.length; i++) {
    let card = remainingCards[i];
    let cardType = card.getAttribute("data-id");
    unmatched.push(cardType);
  }
  console.log(unmatched);
  // count the number of each card type
  let counts = {};
  for (let i = 0; i < unmatched.length; i++) {
    let cardType = unmatched[i];
    if (counts[cardType] === undefined) {
      counts[cardType] = 1;
    } else {
      counts[cardType]++;
    }
  }
  console.log(counts);

  let total = 0;
  for (let cardType in counts) {
    total += counts[cardType];
  }
  if (total === Object.keys(counts).length) {
    gameOver();
  }
}

function gameOver() {
  // show the game-over modal
  let modal = document.querySelector("#game-over");
  modal.classList.remove("is-hidden");
}

function randomWiggle() {
    let cards = document.querySelectorAll("button");

    // do this every 30 seconds 
    setInterval(() => {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            let random = Math.random();
            if (random < 0.1) {
                card.classList.add("wiggle");
                console.log(card);
            }

            setTimeout(() => {
                card.classList.remove("wiggle");
            }, 1000);
        }
    }, 10000); 


}

function playSound(sound) {
    let audio = new Audio(sound);
    audio.play();
}



function init() {
  createRows(cardRows);
  grid.addEventListener("click", handleClick);
  updateScore();
  //startTimer();
  randomWiggle();
}

init();
