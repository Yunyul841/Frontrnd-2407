let summerFruits = ['수박', '참외', '복숭아', '포도'];

// for (let i = 0; i <=3; i++) {
// 	console.log(i, summerFruits[i]);
// }
// for (let i = 0; i < 4; i++) {
// 	console.log(i, summerFruits[i]);
// }

for (let i = 0; i < summerFruits.length; i++) {
	console.log(i, summerFruits[i]);
}



// 1에서 100사이의 정수의 합 구하기
let sum100 = 0;
for (let i = 1; i <= 100; i++){
	sum100 += i;
}
console.log(`1에서 100사이의 정수의 합 = ${sum100}`);

// 1에서 100사이의 홀수의 합 구하기
// let sumOdd = 0;
// for (let i = 1; i <= 100; i++){
// 	if (1 % 2 ==1)
// 		sumOdd += 1;
// }

let sumOdd = 0;
for (let i = 1; i < 100; i +=2){
	sumOdd += i;
}
console.log(`1에서 100사이의 홀수의 합 = ${sumOdd}`);

let smdwnr = 0;
for (let i = 2; i <= 100; i +=2){
	smdwnr += i;
}
console.log(`1에서 100사이의 짝수의 합 = ${smdwnr}`);

let soccer = 0;
for (let i = 3; i < 100; i +=3){
	soccer += i;
}
console.log(`1에서 100사이의 3의 배수의 합 = ${soccer}`);

// 200에서 100사이의 5의 배수의 합을 
let sum5 = 0;
for (let i = 200; i >= 100; i -= 5){
	sum5 += i;
}
console.log(`200에서 100사이의 5의 배수의 합 = ${sum5}`);

// 하루는 몇분이냐?
let sumMinute = 0;
for (let hour = 0; hour <= 23; hour++){
	for (let minute = 0; minute <= 59; minute++)
		sumMinute++;
}
console.log(sumMinute);