// JSON - JavaScript Object Nitation
// 이기종 컴퓨터간에 테이터를 주고 받는 표준 - XML(eXtensible Markup Language)
// 실제는 json 이 업계 표존임(de facto standard)

let name ='James', age = 27, job = '프로그래머';
let person = {name:name, age: age, job:job};
let newPerson = {name, age, job};				// key 이름과 변수명이 같으면 하나만 사용가능
console.log(person, newPerson);

let externalform = JSON.stringify(person);
console.log(externalform);

let internalform = JSON.parse(externalform);
console.log(internalform);

let personArray = [person, {name:'maria', age: 25, job: '디자이너'}];
console.log(JSON.stringify(personArray));
console.log(personArray);