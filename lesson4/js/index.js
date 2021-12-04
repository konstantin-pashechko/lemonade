'use strict'

const arrNum = [1, -23, -14, 676, 2, 336767]
const arrStr = ['', 'Zlata', 'Hello', 'Sergei', 'Cookie', 'Song']
// const arrObj = [
//     {
//         id: 1,
//         price: 48000,
//         name: 'BMW',
//         description: 'This is unit description'
//     }, {
//         id: 2,
//         price: 55000,
//         name: 'Lexus',
//         description: 'This is unit description'
//     }, {
//         id: 3,
//         price: 12000,
//         name: 'Toyota',
//         description: 'This is unit description'
//     }, {
//         id: 4,
//         price: 10000,
//         name: 'Skoda',
//         description: 'This is unit description'
//     }, {
//         id: 5,
//         price: 20000,
//         name: 'Volkswagen',
//         description: 'This is unit description'
//     }, {
//         id: 6,
//         price: 13000,
//         name: 'Citroen',
//         description: 'This is unit description'
//     },
// ]
// arrNum.unshift('30')
// arrNum.push({key:'string'})
// console.log(arrNum)
//arrStr.splice(1,3,{key:'value'},45)
// let result = arrStr.slice(0)
// let res = arrNum.concat(arrStr)
// console.log(res)
//
// arrStr.forEach((item,index,arr)=>{
//     console.log(item,index)
// })

//search

// let inputValue  = 12000


// let result = arrObj.find((item)=>{
//     if(item.price>12000&&item.price<20000){
//         return item
//     }
// })


// let result = arrObj.filter((item)=>{
//     if(item.price>=12000&&item.price<=20000){
//         return item
//     }
// })

//
// let bool = arrNum.includes(23)
//
// console.log(bool)
//
// var array = [2, 5, 9];

// console.log(array.indexOf(2))


// let res = arrStr.map((item)=>Boolean(item))
// console.log(res)
//
// arrNum.sort((a, b) => {
//     // if (a < b) return -1
//     // if (a > b) return 1
//     // if (a === b) return 0
//     return (a-b)
// })


// arrNum.reverse()


// console.log(arrNum)


// let temp,
//     bool

// function sortBubble(arr) {
//     for (let i = 0; i < arr.length-1; i++) {
//         bool=false
//         for (let j = 0; j < arr.length-i; j++) {
//             if (arr[j] > arr[j+1]) {
//                 bool=true
//                 temp = arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//         if(!bool)break
//     }
// }
// sortBubble(arrNum)



// let res = arrNum.reduce((acc,cur,index)=>{
//     console.log(...acc,)
//     return {
//         ...acc,
//         [index]:cur
//     }
// },{})
//
// console.log(res)


// let someFunction = function getName(name){
//     console.log(name)
// }

// let vasyaName = 'Vasya'
//
//
// let val = 'some value'
//
// function getCbk(someFunction,name){
//     someFunction(name)
// }
//
// getCbk(getName,vasyaName)
//
// function getName(name){
//     console.log(val)
//     console.log(name)
// }



//
// function getElement(val,arr){
//     let result = arr.find((item)=>item.price===val)
//     if(result) {
//         editPrice(result)
//     }else{
//         console.log('not find')
//     }
// }
//
// getElement(20000,arrObj)
//
// function editPrice(obj){
//     obj.price=30000
//     console.log(obj)
//     let id = findIndex(obj.id)
//     if(id!==-1){
//         spliceElement(id,obj)
//     }else{
//         console.log('bad id')
//     }
// }
//
// function findIndex(id){
//     return arrObj.findIndex((item)=>item.id===id)
// }
//
// function spliceElement(id,obj){
//     arrObj.splice(id,1,obj)
//     console.log(arrObj)
// }

//
// const arrObj = [
//     {
//         id: 1,
//         price: 48000,
//         name: 'BMW',
//         description: 'This is unit description'
//     }, {
//         id: 2,
//         price: 55000,
//         name: 'Lexus',
//         description: 'This is unit description'
//     }, {
//         id: 3,
//         price: 12000,
//         name: 'Toyota',
//         description: 'This is unit description'
//     }, {
//         id: 4,
//         price: 10000,
//         name: 'Skoda',
//         description: 'This is unit description'
//     }, {
//         id: 5,
//         price: 20000,
//         name: 'Volkswagen',
//         description: 'This is unit description'
//     }, {
//         id: 6,
//         price: 13000,
//         name: 'Citroen',
//         description: 'This is unit description'
//     },
// ]


// const german = ['Volkswagen','BMW']
// const france = ['Citroen']
//
// getAllCarsByCountry(arrObj,german,'german')
// getAllCarsByCountry(arrObj,france,'france')


// function getAllCarsByCountry(cars,countries,countryName){
//     for(let car of cars){
//             if(countries.includes(car.name)){
//                 changePrice(car,countryName)
//             }
//     }
// }
//

//
// function changePrice(car,countryName){
//     if(countryName==='german'){
//         //car.price*=1.1
//         car.price = Math.round(car.price*1.1)
//     }else{
//         car.price = Math.round(car.price*.95)
//     }
//     console.log(car)
// }
// console.log(arrObj)


let obj ={
    key:88878,
    value:'this is valu',
    nestedObj:{
        key:122,
        value:'kjkjk'
    }
}
// let cloneObj = Object.assign({},obj)

let cloneObj = {}

for(let key in obj){
    if(typeof obj[key] === 'object'){
        cloneObj[key]={}
        for(let nestedKey in obj[key]){
            cloneObj[key][nestedKey] = nestedKey
        }
    }else{
        cloneObj[key] = obj[key]
    }
}
console.log(cloneObj)





