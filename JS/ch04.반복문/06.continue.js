// 1 ~ 10 홀수의 합
let sumOdd = 0;
for (let i = 1; i <= 10; i +=2)
	sumOdd += i;

sum100 = 0;
for (let i = 1; i <= 10; i++) {
	if ( i % 2 == 0)
		continue;
	sum100 += i;
}
console.log(sum100);

for ( let i = 1; i <= 5; i++) {
	let line =''; 
	for (let k = 1; k <= 5; k++) {
		// if (k == i)
		// 	continue;
		line += k + ' ';
		if (k == i)
			break;
	}
	console.log(line);
}