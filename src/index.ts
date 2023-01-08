// function isOdd(n:number):boolean{
//     return  n%2 !== 0
// }
// let nums:number[] = [3,4,5]

// let nums:Array<number>=[3,4,5]

// function printValues(obj:Object){
//    const values = Object.values(obj)
//    values.forEach(v=>console.log(v))
// }

// let name:string | undefined
// name='倪好'
// if(typeof name === "string"){
//   console.log(name.charAt(1))
// }
//
// let gender:"男" | "女"
//
// let arr:[];
//
// let user:{
//   name:string,
//   age:number
// }

// let tu:[string,number]

// let a
// a=null

// let data:any = "any"
// let num:number = data
// console.log(num)

// type User = {
//     name:string,
//     age:number,
//     sex:'男'|'女'
// }
//
// type Gender = '男' | '女'
//
// let user:User;
//
//
// function getUsers(g:Gender):User[]{
//     return [
//         {name:'倪好',age:1,sex:g}
//         ]
// }
//
// /**
//  * 得到 a*b 的结果
//  * @param a
//  * @param b
//  */
// function combine(a:number,b:number):number;
// /**
//  * 得到 a，b拼接结果
//  * @param a
//  * @param b
//  */
// function combine(a:string,b:string):string
// function combine(a:number|string,b:number|string):number|string{
//     if(typeof a === 'number' && typeof  b === "number"){
//         return a*b
//     }else if(typeof a=== 'string' && typeof b === 'string'){
//         return a+b
//     }
//     throw new Error('a，b必须是相同类型')
// }
// console.log(combine('3','3'))

// function  sum(a:number,b:number,c:number=0):number{
//         return a+b+c
// }
// console.log(sum(1,2))


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




