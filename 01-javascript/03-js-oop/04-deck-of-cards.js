// Assignment: Deck of Cards
// -----------------------------------------------------------------------------------
// Create a Card class. A card should have the following functionality:

// Each Card should have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
// Each Card should have a string value (eg, "Ace", "Two", ...., "Queen", "King")
// Each Card should have a numerical value (1-13)
// Each Card should have a show method (log the card's information to the console)
// -----------------------------------------------------------------------------------
// Create a Deck class. A deck should have the following functionality:

// The Deck should contain the 52 standard Cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random Card
// Deal should return the Card that was dealt and remove it from the Deck
// -----------------------------------------------------------------------------------
// Now create a Player class. A Player should have the following functionality:

// The Player should have a name
// The Player should have a hand (an array of cards taken from a Deck)
// The Player should be able to take a Card (use the deck.deal method)
// The Player should be able to discard a Card

class Card {
    constructor(suit, stringValue, value) {
        this.suit = suit;
        this.stringValue = stringValue;
        this.value = value;
    }
    showCard() {
        console.log(`This is a ${this.suit}`);
    }
}
class Deck {
    constructor() {
        this.cards = [];
        this.create();
        this.shuffle();
    }
    create() {
        var suits = ["hearts", "diamonds", "spades", "clubs"];
        const strValues = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queens", "King"];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < strValues.length; j++) {
                var card = new Card(suits[i], strValues[j], j + 1);
                this.cards.push(card);
            }
        }
    }

    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            let temp = this.cards[i];
            let randNumber = Math.floor(Math.random() * this.cards.length);
            this.cards[i] = this.cards[randNumber];
            this.cards[randNumber] = temp;
        }
        // console.log('Shuffle Baby! :)');
    }
    reset() {
        // console.log('Reseting..')
        this.cards = [];
        this.create();
    }
    deal() {
        // console.log('Dealing...')
        return this.cards.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    draw(deck) {
        // console.log('I love drawing! :)')
        this.hand.push(deck.deal());
        return this
    }

    discard() {
        this.hand.pop();
        return this;
    }
}


var deck = new Deck();
console.log(deck.cards);
console.log('----------------------------------------------------------------------------------')
deck.reset()
deck.shuffle();
console.log('----------------------------------------------------------------------------------')
var player = new Player('Vjosa')
console.log(player.draw(deck));
var player1 = new Player('Nick');
console.log(player1.draw(deck));


