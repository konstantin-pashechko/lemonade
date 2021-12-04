'use strict'

let counter = 0
let step = 1
let res

// nameOfFunction(counter,step)
//
// function nameOfFunction(num1,num2){
//     console.log('its work')
//     return num1+num2
// }
//

// let res = nameOfFunction(1,3)
//
// console.log(res)
//

// let func = function nameOfFunction(num1,num2){
//     return num1+num2
// }
//

// let quantity = 1
//
// function calcSum(num1,num2){
//     let quantity = 3
//     return num1+num2
// }
//
//
// let result = calcSum(1)
//
// console.log(result)
// console.log(quantity)


// function calcSum(num1,num2=2){
//     return num1+num2
// }
//
// let result = calcSum(1)
//
// console.log(result)


// let func = (a, b) => a + b
//
// console.log(func(2, 5))


// function getName(name, cbk) {
//     cbk(name)
// }
//
// getName('Larisa', showName)
//
// function showName(name) {
//     console.log(name, 'this is cbk')
// }

// let keyName = 'hello'
//
// const obj = {
//     key: 'value',
//     key2:'value2',
//     camelCase:'value',
//     obj:{
//         key: 'value',
//         key2:'value2',
//         camelCase:'value',
//     },
//
// }
// const cloneObj = {}
//
// const someObj = {
//     key:1
// }
//
// const thirdObj = {
//     key:1
// }
// //
// // console.log(someObj===thirdObj,'compare')
//
// const secondObj = obj
//
// secondObj.key=25
// secondObj.newKey = 456
// secondObj[keyName] = 'new value'
//
// // console.log(secondObj,'secondObj')
// // console.log(obj,'firstObj')
//
//
// for(let key in obj){
//     cloneObj[key]=obj[key]
// }
//
// let cloneObject = Object.assign({},obj)
//
// cloneObject.newKey ='thi is new value'
//
// // console.log(obj)
// // console.log(cloneObject)
//



// const obj = {
//     firstName:'Vasya',
//     lastName: 'Pupkin',
//     getFullName:function getFullName(){
//         console.log(obj.firstName+obj.lastName)
//     }
// }


// obj.getFullName()
//
// function createObject(firstName,lastName){
//     console.log({
//         firstName,
//         lastName,
//     })
// }
// createObject('Vasya','Pupkin')

// function getDestructurization({firstName,lastName},param=10){
//     console.log(firstName)
//     firstName='hello'
// }
//
// getDestructurization(obj)


// const obj = {
//     firstName:'Vasya',
//     lastName: 'Pupkin',
//     getFullName:function getFullName(){
//         console.log(this.firstName+this.lastName)
//     }
// }
//
// obj?.someKey



//array
let obj = {
    key:1,
    key2:2
}
let arr = [obj,4545,'hjjhj',[]]

console.log(arr[2])
let newArr = []
// newArr.length=20
newArr[5]='this is value'
console.log(newArr)

delete arr[arr.length-1]

console.log(arr,'this is arr')










