'use strict'

// let start
// let finish
// let step
// let result
// //let value = prompt('input number')

// /*
// ** task 1
// */
// start = 1
// finish = 400
// result = []

// for(let i = start; i <= 400; i++){
// 	result.push(i)
// }

// console.log([...result])

// /*
// ** task 2
// */
// result = []
// step = 3

// for(let i = start; i <= 400; i += step){
// 	result.push(i)
// }

// console.log([...result])

// /*
// ** task 3
// */
// result = []
// start = 654
// finish = 0

// for(let i = start; i >= 0; i--){
// 	result.push(i)
// }

// console.log([...result])

// /*
// ** task 4
// */
// result = []
// start = 1983
// finish = 2017
// for(let i = start; i <= 2017; i++){
// 	result.push(i)
// }

// console.log([...result])

// /*
// ** task 5
// */
// result = []
// start = -4
// finish = 100
// step = 2

// for(let i = start; i <= 100; i += step){
// 	result.push(i)
// }

// console.log([...result])


// /*
// ** task 6 ТАБЛИЦА УМНОЖЕНИЯ
// */

// 	let table = document.querySelector('table')
// 	let row = null;

// 	function addRow() {
// 		row = table.insertRow(0);
// 	}

// 	function addCell (value = '') {
// 		let cell = row.insertCell(0);
// 		let text = document.createTextNode(value);
// 		cell.appendChild(text)
// 	}
	

// 	for (let i = 9; i > 0; i--) {
// 		addRow();
// 		for(let j = 9; j > 0; j--){
// 			addCell(j*i);
// 		}
// 	}	

// 	let td = document.querySelectorAll('td')
// 	td.forEach((item)=>{
// 		item.style.background = '#ccc';
// 	})


// ** task 7

// result = []

// for(let i = 1000; i <= 2000; i++){
// 	result.push('&#'+i)
// }

// console.log(result)

// /*
// ** task 8
// */
// result = 0

// for(let i = 0; i <= 100; i++){
// 	result += i
// }

// console.log(result)

// /*
// ** task 9
// */
// result = 1
// start = 1
// finish = 50

// for(let i = start; i <= finish; i++){
// 	result = result * i
// }

// console.log(result)

// /*
// ** task 10
// */
// // result = []
// // let str = '';

// // for(let i=1; i<= value; i++){
// // 	str = str + 'x'
// // 	result.push(str) 
// // }

// // console.log([...result])

// /*
// ** task 11
// */
// // result = []
// // let number = ''

// // for(let i = 1; i <= value; i++){
// // 	number = (number + 1)
// // 	result.push(number * i)
// // }
// // console.log([...result])

// /*
// ** task 12
// */ //Сколько элементов массива надо сложить, чтобы получить больше 10?

// let limit = 10
// let arr = [1, 2, 5, 0, 4, 5, 6]

// const count = arr.reduce((acc, amount, index) => {
// 	if(acc.total < limit){
// 		acc.count = index+1
// 		acc.total += amount
// 	}
// 	return acc
// }, { count: 0, total: 0,}).count; 

// console.log(count);

// /*
// ** task 13
// ** Реализовать реверс массива без reverse()
// */
// let array = [1, 2, 3, 4, 5,6]


// let toReverse = (arr)=>{
// 	let result = []
// 	for(let i = arr.length-1; i >= 0; i--){
// 		result.push(arr[i])
// 	}
// 	return result
// }

// result = toReverse(array)
// console.log(result)


//РЕКУРСИЯ
	/*1*/
	// function func(n, i = 1){
	// 	if(i <= n){
	// 		console.log(i)	
	// 		func(n, ++i)
	// 	}
	// 	return false
	// }

	// func(5)

		/*2*/
	// let a = 20
	// let b = 10
	// let res = (function getRow(a, b, arr = []){
	// 	if((a-b)<0){
	// 		arr.push(a)
	// 		getRow(++a, b, arr)
	// 	} else if((a-b)>0) {
	// 		arr.push(a)
	// 		getRow(--a, b, arr)
	// 	} else {
	// 		arr.push(a)
	// 	}
	// 	return(arr)
	// })(a,b)
	// console.log(res)

	/*3*/
	// let res = (function run(num, sum = 0){
	// 	if(num > 0){	
	// 		return run((num-num%10)/10, sum+num%10)
	// 	} else {
	// 		sum = sum + num
	// 	}
	// 	return(sum)
	// })(1234567890)
	// console.log(res)

	/*4*/
	// let res = (function run(num, str = ''){
	// 	if(num > 0){	
	// 		return run((num-num%10)/10, str+num%10)
	// 	}	
	// 	return(str)
	// })(1234567890)
	// console.log(res)

	/*5*/
	// let res = (function run(num, str = ''){
	// 	if(num > 0){	
	// 		return run((num-num%10)/10, num%10+str)
	// 	}	
	// 	return(str)
	// })(1234567890)
	// console.log(res)

	/*6*/
	// let arr1 = ['a', 'b', 'c']
	// let arr2 = [1, 2, 3]
	// let result = arr1.concat(arr2)
	// console.log(result)

	/*7*/
	// let arr = ['a', 'b', 'c']
	// arr.push(1)
	// arr.push(2)
	// arr.push(3)
	// console.log(arr)

	/*8*/
	// let arr = [1, 2, 3]
	// arr.unshift(6)
	// arr.unshift(5)
	// arr.unshift(4)
	// console.log(arr)

	/*9*/
	// let arr = [1, 2, 3, 4, 5]
	// let result = arr.slice(0, 3)
	// console.log(result)

	/*10*/
	// let arr = [1, 2, 3, 4, 5]
	// let result = arr.slice(3)
	// console.log(result)

	/*11*/
	// let arr = [1, 2, 3, 4, 5]
	// arr.splice(1,2)
	// console.log(arr)	

	/*12*/
	// let arr = [1, 2, 3, 4, 5]
	// let result = arr.splice(1,3)
	// console.log(result)	

	/*13*/
	// let arr = [1, 2, 3, 4, 5]
	// arr.splice(2,0,'a','b','c')
	// console.log(arr)

	/*14*/
	// let arr = [1, 2, 3, 4, 5]
	// arr.splice(1,0,'a','b')
	// arr.splice(6,0,'c')
	// arr.splice(8,0,'e')
	// console.log(arr)

	/*14*/
	// let arr = [1, 2, 3, 4, 5]
	// arr.splice(1,0,'a','b')
	// arr.splice(6,0,'c')
	// arr.splice(8,0,'e')
	// console.log(arr)