'use strict'
//
// let obj = {
//     key:'value',
//     key2:'value2Z',
//     key3:[1,{},3]
// }
//
// let arr = [[23,33],[55,78],[23,33],[55,78]]
// let arrFromObj = Object.entries(obj)

// console.log(arr[0][1])
//
// const [firstArr,secondArr,third,...rest] =arr
// const cloneArr = [...arr]
// const refArr = arr
// const {key,key2,key3:[firstVal,...restVal]} = obj
//
// console.log(firstVal,'firstVal')
// console.log(restVal,'restVal')
//
// // let key = obj.key
// console.log(key,'this is object destr')

//
// function getSome({key,key2=100}){
//     console.log(key2,'this is key2')
// }
//
//
// getSome(obj)

// let arr = [[23, 33], [55, 78], [676, 898], [1551, 90]]

// const res = arr.flat()
// console.log(res)

// const res = [].concat(...arr)
// console.log(res)
//
//
// console.log(Array.isArray(arr))
//
// Array={
//     isArray:function(param){
//         //some operatiom
//         return
//     }
// }

//
// let str = 'some string'
//
// let res = str.split(' ')
//
//
// let resStr = res.join(',')
//
// console.log(res)
// console.log(resStr)


//tasks

//найти к-во слов в предложении
//и вывести в консоль
//let words = "I am not gonna live forever, forever but I wanna live while I am alive"


// state:{
//     user:[]
// }
// user[0]=kkn


// let arr
// createObjectFromString(words)
//
// function createObjectFromString(str) {
//     arr = str.split(' ')
//     let obj = {}
//     identStringWithComa(arr)
//     for(let word of arr){
//         if (obj[word]) {
//             obj[word] += 1
//         } else {
//             obj[word] = 1
//         }
//     }
// }
//
// function identStringWithComa(arr){
//     arr.forEach((word, index) => {
//         if (word === 'forever,') {
//             // res = deleteComa(word)
//             arr.splice(index, 1, deleteComa(word))
//         }
//     })
// }
//
// function deleteComa(str) {
//     let arr = str.split('')
//     arr = arr.slice(0,arr.length-1 )
//     return arr.join('')
// }
//

// let arr = [[23, 45, 78], [23, 56], 78]
//
// let sum = 0
//
// for (let i = 0; i <= arr.length - 1; i++) {
//     if (Array.isArray(arr[i])) {
//         for (let j = 0; j <= arr[i].length - 1; j++) {
//             console.log(arr[i][j], 'arr[i][j])')
//             sum += arr[i][j]
//         }
//     } else {
//         sum += arr[i]
//     }
// }
//
//
// function getSumOfAllElements(arr) {
//     for (let i = 0; i <= arr.length - 1; i++) {
//         if (Array.isArray(arr[i])) {
//             getSumOfAllElements(arr[i])
//         }
//         else{
//             sum += arr[i]
//         }
//     }
// }

// getSumOfAllElements(arr)


// console.log((.2+.1).toFixed(2))
//
// console.log(.3+.5)


//context object


// let obj = {
//     name:'Vasya',
//     lastName:'Phukin',
//     getName(){
//         console.log(this.name)
//     }
// }

// this = {}


// function ObjectConstructor(name,lastName){
//     this.name = name
//     this.lastName = lastName
// }
//
// let res  = new ObjectConstructor('name','lastName')

let user = {
    name: "John",
    surname: "Smith",
    get fullName() {
        return `${this.name} ${this.surname}`
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ")
       // let arr =   ['John','Travolta']
        // this.name = arr[0]
    }
}




console.log(user.fullName)

user.fullName='John Travolta'

console.log(user.fullName)


// let fullName = 67
//
// computed:{
//     fullName(name,surname){
//         get{
//             return `${name} ${surname}`;
//         }
//         set{
//              [name,surname] = value.split(" ");
//         }
//         return arr.length
//     }
// }
//

//
// console.log(user.fullName)
//
// user.fullName = "Alice Cooper";
//
// alert(user.name); // Alice
// alert(user.surname); // Cooper
//
//
//















