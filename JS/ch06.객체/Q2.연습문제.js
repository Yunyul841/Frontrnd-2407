// 1. 1에서 1000사이에 0은 몇번, 1은 몇번, ..., 9는 몇번 사용되었는가?
function displayDigitCounts() {
    let start = 1;
    let end = 1000;
    let digitCounts = function displayDigitCounts() {
		let start = 1;
		let end = 1000;
		let digitCounts = countDigitsInRange(start, end);
	
		let result = "1부터 1000 사이의 숫자들이 사용된 횟수:\n";
		for (let i = 1; i <= 9; i++) {
			result += `${i}: ${digitCounts[i - 1]}번\n`;
		}
	
		console.log(result);
	}
	
	// 함수 호출하여 결과 출력
	displayDigitCounts();function displayDigitCounts() {
		let start = 1;
		let end = 1000;
		let digitCounts = countDigitsInRange(start, end);
	
		let result = "1부터 1000 사이의 숫자들이 사용된 횟수:\n";
		for (let i = 1; i <= 9; i++) {
			result += `${i}: ${digitCounts[i - 1]}번\n`;
		}
	
		console.log(result);
	}
	
	displayDigitCounts();CountDigitsInRange(start, end);
	
    let result = "1부터 1000 사이의 숫자들이 사용된 횟수:\n";
    for (let i = 1; i <= 9; i++) {
		result += `${i}: ${digitCounts[i - 1]}번\n`;
    }
	
    console.log(result);
	
}
displayDigitCounts();
// 함수 호출하여 결과 출력

// 함수 호출하여 결과 출력

// 2. c:/workspace/Frontend/JS/CH06.객체/Q2.연습문제.js
//		위 문자열에서 파일명 Q2.연습문제.js 만 분리하세요.


// 3. 두개의 세자리수를 곱해서 나온 결과가 palindrome일 떄
//		가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?

// 4. 다음 문장에서 the 단어는 몇번 사용되었는가??
