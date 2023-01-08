type Deck = NormalCard[]
type Color = '♥' | '♠' | '♦' | '♣' | 'red King' | 'black King'
type  NormalCard = {
    color: Color,
    mark: number | 'Big King' | 'Little King'
}

function createDeck(): Deck {
    const deck: Deck = [];
    for (let i = 1; i <= 13; i++) {
        deck.push(
            {mark: i, color: '♥'},
            {mark: i, color: '♠'},
            {mark: i, color: '♦'},
            {mark: i, color: '♣'}
        )
    }
    deck.push({color: 'red King', mark: 'Big King'}, {color: 'black King', mark: 'Little King'})
    return deck
}

function printDeck(deck: Deck) {
    let result = '\n';
    deck.forEach((card,i) => {
        let str = card.color
        if (card.mark>1 && card.mark <= 10) {
            str += card.mark
        }else if (card.mark === 1){
            str+='A'
        }
        else if(card.mark === 11){
            str+='J'
        }else if(card.mark === 12){
            str+='Q'
        }else if(card.mark === 13){
            str+='K'
        }
      result+=str+'\t';
        if((i+1)%4 === 0){
            result += '\n'
        }
    })
    console.log(result)
}
const deck = createDeck()
printDeck(deck)




