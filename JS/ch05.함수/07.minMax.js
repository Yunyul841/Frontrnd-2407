// 최소값, 최대값 찾기

let arr = [45, 3, 27, 89, 6, 24];

let minVal = 100, maxVal = 0;
for(let num of arr) {
	if (num < minVal){
		minVal = num;
	}
	if (num > maxVal) {
		maxVal = num;
	}
	console.log(`과정: ${num}, 최소값: ${minVal}, 최대값: ${maxVal}`);
}
console.log(`최소값: ${minVal}, 최대값: ${maxVal}`);

function myMin(...arr) {
	let munval = Number.MAX_SAFE_INTEGER;
	for (let num of arr)
		if (num < minVal)
			minVal = num;
		return minVal;
}
function mymax(...arr) {
	let maxVal = Number.MIN_SAFE_INTEGER;
	for ( let num of arr)
		if (num > maxVal)
			maxVal = num;
		return maxVal;
}
// console.log(myMin(arr), mymax(arr));
console.log(myMin(45, 67, 3, 25, 88, 19), mymax(45, 67, 3, 25, 88, 19));