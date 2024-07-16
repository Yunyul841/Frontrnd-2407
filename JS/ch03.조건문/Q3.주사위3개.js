// let a =Math.ceil(Math.random() * 6);
// let b =Math.ceil(Math.random() * 6);
// let c =Math.ceil(Math.random() * 6);

// let asd = 0;

// console.log(a,b,c);

// if(a == b && b == c && a == c){
// asd = 10000 + a*1000;}
// else if( a == b && b !== c && a !== c){
// 	asd = 1000 + a * 100;}
// else if ( b == c && c !== a && a !== b){
// asd = 1000 + b * 100;}
// else if (c == a && a !== b && c !== b){
// asd = 1000 + c * 100;}
// else {
// asd = Math.max(a,b,c) * 100;}

// console.log(`${asd}`);



let dice1 =Math.ceil(Math.random() * 6);
let dice2 =Math.ceil(Math.random() * 6);
let dice3 =Math.ceil(Math.random() * 6);
let prize = 0;

// if (dice1 == dice2 && dice2 == dice3)
// 	prize = 10000 + 1000 * dice1;
// else if (dice1 == dice2)
// 	prize = 1000 + 100 * dice1;
// else if ( dice2 == dice3)
// 	prize = 1000 + 100 * dice1;
// else if (dice1 == dice3)
// 	prize = 1000 + 100 * dice1;
// else {
// 	let maxDice = dice1 > dice2 ? dice1 : dice2;
// 	maxDice = maxDice > dice3 ? maxDice : dice3
// 	prize + 100 * maxDice
// }
// console.log(dice1, dice2, dice3,  '==>', prize);


// Refactoring
if (dice1 == dice2 && dice2 == dice3)
	prize = 10000 + 1000 * dice1;
else if (dice1 == dice2 || dice1 == dice3)
	prize = 1000 + 100 * dice1;
else if ( dice2 == dice3)
	prize = 1000 + 100 * dice2;
else {
	let maxDice = Math.max(dice1, dice2, dice3);
	prize = 100 * maxDice;
}
console.log(dice1, dice2, dice3,  '==>', prize);

