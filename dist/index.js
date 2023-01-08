var Color;
(function (Color) {
    Color["heart"] = "\u2665";
    Color["spade"] = "\u2660";
    Color["club"] = "\u2663";
    Color["diamond"] = "\u2666";
})(Color || (Color = {}));
var Mark;
(function (Mark) {
    Mark["A"] = "A";
    Mark["TWO"] = "2";
    Mark["THREE"] = "3";
    Mark["FOUR"] = "4";
    Mark["FIVE"] = "5";
    Mark["SIX"] = "6";
    Mark["SEVEN"] = "7";
    Mark["EIGHT"] = "8";
    Mark["NIGHT"] = "9";
    Mark["TEN"] = "10";
    Mark["ElEVEN"] = "J";
    Mark["TWELVE"] = "Q";
    Mark["KING"] = "K";
    Mark["BIG"] = "Big King";
    Mark["LITTLE"] = "Little King";
})(Mark || (Mark = {}));
function createDeck() {
    const deck = [];
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for (const m of marks) {
        for (const c of colors) {
            deck.push({ color: c, mark: m });
        }
    }
    return deck;
}
function printDeck(deck) {
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
