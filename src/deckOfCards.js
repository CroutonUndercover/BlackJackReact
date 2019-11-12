
//exports an array of strings representing each card, shuffled, using the Fisher-Yates Shuffle
const suits = ["C", "D", "H", "S"];
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "Q", "K"];

let deck = [];

for(let rank of ranks){
    for(let suit of suits){
        deck.push(rank + suit)
    }
}

for(let i = deck.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
  for(let i=deck.length - 1;i > 0; i-- ){
  }
  
  export default deck ;
  