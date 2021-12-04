//1
//let arr = [1,33,456,986,122]
//найти суму квадратов всех значений масива (reduce)

//2
//let arr = [ 'Tanita', 'Vasyl', 'George', 'Stepan']
//получить массив вида: [ 'My name is Tanita','My name is Vasyl', и тд... ] использовать map

//3
//написать функцию которая будет принимать входным параметром массив
//и переставит в нем елементы так что в начале массива будут только цифры а в конце только строки

let arr = ["b", 6, "a", "q", 7, 2]
// function sortTheArray(someArray){
//     // ваш код
// }
//sortTheArray(["b", 6, "a", "q", 7, 2])


// let arr = [1,899,456,66,122]
//
// let sum = arr.reduce((acc, cur) => {
//     console.log(acc)
//     return {
//         ...acc,
//         [cur]:cur
//     }
// },{})
//
//
// for(let i = 0;i<=arr.length;i++){
//
// }
//
// sortTheArray(["b", 6, "a", "q", 7, 2])



	/*
	** Сумма квадратов массива (reduce)
	*/
	// let arr = [1,33,456,986,122]

	// let sumOfSquares = arr.reduce((total, item)=> total + item**2);

	//console.log(sumOfSquares);



	/*
	** Преобразование массива (map)
	*/
	// let arr = [ 'Tanita', 'Vasyl', 'George', 'Stepan']

	// let newArr = arr.map((item)=>`My name is ${item}`)

	// console.log(newArr)



	/*
	** Сортировка массива
	*/
	//let arr =["b", 6, "a", "q", 7, 2]

	// function sortTheArray(someArray){

	// 	let numbers = []
	// 	let liters = []

	// 	someArray.forEach((item)=>{
	// 		if(+item){
	// 			numbers.push(item)
	// 		} else {
	// 			liters.push(item)
	// 		}
	// 	})

	// 	liters.sort()
	// 	numbers.sort((a,b)=> a - b)

	// 	return numbers.concat(liters)
	// }	

	// Array.prototype.range = function (){
	// 	return this.reduce(function (total, item) { +item ? total.unshift(item) : total.push(item); return total}, []).sort();	
	// }

	// console.log(arr.range());


	/*
	** Без sort():
	*/

	let cmp = (a,b,arr)=>{
		let tmp = arr[a]
		arr[a] = arr[b]
		arr[b] = tmp
		return true
	}

	let range = (arr)=>{

		for(i = 0; i < arr.length; i++){
			for(j = 0; j < arr.length - i; j++){
				if(arr[j] > arr[j+1]){
					cmp(j,j+1,arr)
				}
			}
		}		
	}	


	function sortTheArray(arr){
		let numbers = []
		let liters =[]
		arr.forEach((item)=>{
			if(+item){
				numbers.push(item)
			} else {
				liters.push(item)
			}
		})

		range(numbers)
		range(liters)

		return numbers.concat(liters)
	}





	
	let result = sortTheArray(["b", 6, "a", "q", 7, 2])
	console.log(result)