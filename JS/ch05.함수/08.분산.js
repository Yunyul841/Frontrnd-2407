// 배열 원소 각각의 제곱의 합 
function sumOfSquare(arr) {
let sum = 0;
	for (let num of arr) 
		sum += num * num;
	return sum;

}


// 배열 원소의 합의 제곱 
function squareOFSum(arr) {
	let sum = 0;
	for (let num of arr ) 
		sum += num;
	return sum * sum;
}

let arr = [1, 2, 3, 4, 5];
console.log(sumOfSquare(arr), squareOFSum(arr));

let variance = sumOfSquare(arr) / arr.length - squareOFSum(arr) / arr.length **2;
console.log(variance);