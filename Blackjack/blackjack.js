//Setup
//Create a Deck of Cards
let deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

//Create Player's Hand
let playerHand = [];

//Create Dealer's Hand
let dealerHand = [];

//Create Player's Hand Value
let playerHandValue = 0;

//Create Dealer's Hand Value
let dealerHandValue = 0;

//Create Player's Card Total
let playerCardTotal = 0;

//Create Dealer's Card Total
let dealerCardTotal = 0;

//Create a Function to Calculate Hand Value
function calculateHandValue(hand) {
    let handValue = 0;
    for (let i = 0; i < hand.length; i++) {
        let card = hand[i];
        if (card === 'J' || card === 'Q' || card === 'K') {
            handValue += 10;
        } else if (card === 'A') {
            handValue += 11;
        } else {
            handValue += card;
        }
    }
    return handValue;
}

//Create a Function to Draw a Card
function drawCard() {
    let randomIndex = Math.floor(Math.random() * deck.length);
    let card = deck[randomIndex];
    return card;
}

//Deal Initial Cards
playerHand.push(drawCard());
dealerHand.push(drawCard());
playerHand.push(drawCard());
dealerHand.push(drawCard());

//Calculate Hand Values
playerHandValue = calculateHandValue(playerHand);
dealerHandValue = calculateHandValue(dealerHand);

//Calculate Card Totals
playerCardTotal = playerHand.length;
dealerCardTotal = dealerHand.length;

//Game Logic
//Hit
if (playerHandValue <= 21) {
    let hit = prompt("Would you like to hit? (Y/N)");
    if (hit === 'Y') {
        playerHand.push(drawCard());
        playerHandValue = calculateHandValue(playerHand);
        playerCardTotal = playerHand.length;
        console.log("Player's Hand Value: " + playerHandValue);
        console.log("Player's Card Total: " + playerCardTotal);
    }
}

//Stay
if (playerHandValue <= 21) {
    let stay = prompt("Would you like to stay? (Y/N)");
    if (stay === 'Y') {
        console.log("Player's Hand Value: " + playerHandValue);
        console.log("Player's Card Total: " + playerCardTotal);
    }
}

//Dealer Logic
//Hit
if (dealerHandValue < 17) {
    dealerHand.push(drawCard());
    dealerHandValue = calculateHandValue(dealerHand);
    dealerCardTotal = dealerHand.length;
    console.log("Dealer's Hand Value: " + dealerHandValue);
    console.log("Dealer's Card Total: " + dealerCardTotal);
}

//Stay
if (dealerHandValue >= 17) {
    console.log("Dealer's Hand Value: " + dealerHandValue);
    console.log("Dealer's Card Total: " + dealerCardTotal);
}

//Compare Hand Values
if (playerHandValue > 21) {
    console.log("You busted! Dealer wins!");
} else if (dealerHandValue > 21) {
    console.log("Dealer busted! You win!");
} else if (playerHandValue > dealerHandValue) {
    console.log("You win!");
} else if (playerHandValue < dealerHandValue) {
    console.log("Dealer wins!");
} else {
    console.log("It's a tie!");
}