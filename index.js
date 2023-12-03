// Define a deck of cards

const suits = ["♠", "♥", "♣", "♦"]

const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


// Function to create a deck
function createDeck() {
  const deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ suit, value });
    }
  }
  return deck;
}

// Function to shuffle the deck
function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Function to play the War game
function playWar() {
  const deck = createDeck();
  shuffle(deck);

  const player1 = [];
  const player2 = [];

  // Deal cards to players
  while (deck.length > 0) {
    player1.push(deck.shift());
    player2.push(deck.shift());
  }

  let scorePlayer1 = 0;
  let scorePlayer2 = 0;

  // Compare cards and tally scores
  for (let i = 0; i < player1.length; i++) {
    const card1 = player1[i];
    const card2 = player2[i];

    // Get the index of values to compare values
    const valueIndex1 = values.indexOf(card1.value);
    const valueIndex2 = values.indexOf(card2.value);

    if (valueIndex1 > valueIndex2) {
      scorePlayer1++;
    } else if (valueIndex1 < valueIndex2) {
      scorePlayer2++;
    }
  }

  // Declare the winner
  let winner = 'TIED!';
  if (scorePlayer1 > scorePlayer2) {
    winner = 'PLAYER 1 WINS!';
  } else if (scorePlayer1 < scorePlayer2) {
    winner = 'PLAYER 2 WINS!';
  }

  // Display the scores and the winner
  console.log('Player 1 Score:', scorePlayer1);
  console.log('Player 2 Score:', scorePlayer2);
  console.log('Winner:', winner);
}

// Play the game
playWar();