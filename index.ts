type Deck = NormalCard[];
enum Color {
  heart = "♥",
  spade = "♠",
  club = "♣",
  diamond = "♦",
}
enum Mark {
  A = "A",
  TWO = "2",
  THREE = "3",
  FOUR = "4",
  FIVE = "5",
  SIX = "6",
  SEVEN = "7",
  EIGHT = "8",
  NIGHT = "9",
  TEN = "10",
  ElEVEN = "J",
  TWELVE = "Q",
  KING = "K",
  BIG = "Big King",
  LITTLE = "Little King",
}
type NormalCard = {
  color: Color;
  mark: Mark;
};

function createDeck(): Deck {
  const deck: Deck = [];
  const marks = Object.values(Mark);
  const colors = Object.values(Color);
  for (const m of marks) {
    for (const c of colors) {
      deck.push({ color: c, mark: m });
    }
  }
  return deck;
}

function printDeck(deck: Deck) {
  let result = "\n";
  deck.forEach((card, i) => {
    let str = card.color + card.mark;
    if (!(card.mark === Mark.BIG || card.mark === Mark.LITTLE)) {
      result += str + "\t";
      if ((i + 1) % 4 === 0) {
        result += "\n";
      }
    }
  });
  result += Mark.BIG + "\t";
  result += Mark.LITTLE + "\t";
  console.log(result);
}
const deck = createDeck();
printDeck(deck);
