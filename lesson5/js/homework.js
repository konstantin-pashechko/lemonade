'use strict'

let start
let finish
let step
let result
//let value = prompt('input number')

/*
** task 1
*/
start = 1
finish = 400
result = []

for(let i = start; i <= 400; i++){
	result.push(i)
}

console.log([...result])

/*
** task 2
*/
result = []
step = 3

for(let i = start; i <= 400; i += step){
	result.push(i)
}

console.log([...result])

/*
** task 3
*/
result = []
start = 654
finish = 0

for(let i = start; i >= 0; i--){
	result.push(i)
}

console.log([...result])

/*
** task 4
*/
result = []
start = 1983
finish = 2017
for(let i = start; i <= 2017; i++){
	result.push(i)
}

console.log([...result])

/*
** task 5
*/
result = []
start = -4
finish = 100
step = 2

for(let i = start; i <= 100; i += step){
	result.push(i)
}

console.log([...result])


/*
** task 6 ТАБЛИЦА УМНОЖЕНИЯ
*/

	let table = document.querySelector('table')
	let row = null;

	function addRow() {
		row = table.insertRow(0);
	}

	function addCell (value = '') {
		let cell = row.insertCell(0);
		let text = document.createTextNode(value);
		cell.appendChild(text)
	}
	

	for (let i = 9; i > 0; i--) {
		addRow();
		for(let j = 9; j > 0; j--){
			addCell(j*i);
		}
	}	

	let td = document.querySelectorAll('td')
	td.forEach((item)=>{
		item.style.background = '#ccc';
	})

/*
** task 7
*/
result = []

for(let i = 1000; i <= 2000; i++){
	result.push('&#'+i)
}

console.log(result)

/*
** task 8
*/
result = 0

for(let i = 0; i <= 100; i++){
	result += i
}

console.log(result)

/*
** task 9
*/
result = 1
start = 1
finish = 50

for(let i = start; i <= finish; i++){
	result = result * i
}

console.log(result)

/*
** task 10
*/
// result = []
// let str = '';

// for(let i=1; i<= value; i++){
// 	str = str + 'x'
// 	result.push(str) 
// }

// console.log([...result])

/*
** task 11
*/
// result = []
// let number = ''

// for(let i = 1; i <= value; i++){
// 	number = (number + 1)
// 	result.push(number * i)
// }
// console.log([...result])

/*
** task 12
*/ //Сколько элементов массива надо сложить, чтобы получить больше 10?

let limit = 10
let arr = [1, 2, 5, 0, 4, 5, 6]

const count = arr.reduce((acc, amount, index) => {
	if(acc.total < limit){
		acc.count = index+1
		acc.total += amount
	}
	return acc
}, { count: 0, total: 0,}).count; 

console.log(count);

/*
** task 13
** Реализовать реверс массива без reverse()
*/
let array = [1, 2, 3, 4, 5,6]


let toReverse = (arr)=>{
	let result = []
	for(let i = arr.length-1; i >= 0; i--){
		result.push(arr[i])
	}
	return result
}

result = toReverse(array)
console.log(result)