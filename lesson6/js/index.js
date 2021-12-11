'use strict'

let company = {
    sales: [{name: 'John', salary: [1000, 4]}, {name: 'Alice', salary: [964, 133]}],
    development: {
        sites: [{name: 'Peter', salary: [2000, 13434]}, {name: 'Alex', salary: [1800, 99]}],
        internals: [{name: 'Jack', salary: 1300}]
    }
}




// function sumSalaries(department) {
//     let obj ={}
//     if (Array.isArray(department)) {
//         return department.reduce((acc, cur) => {
//             let sum = 0
//             if(Array.isArray(cur.salary)){
//                 for(let item of cur.salary){
//                     sum+=item
//                 }
//             }
//             return {
//                 ...acc,
//                 [cur.name]:sum?sum:cur.salary

//             }
//         },{});
//     } else {
//
//         for (let subdep of Object.values(department)) {
//             obj = {...obj,...sumSalaries(subdep)}
//         }
//         return obj;
//     }
// }
//
//
//
//
// console.log(sumSalaries(company));

// let b = 8
//
// function getConditional(a){
//     return a?a:b
// }
//
// getConditional()
//
// if(){
//     this
// }else{
//     this is b
// }





//
// function makeCounter() {
//     let count = 0
//     return function () {
//         return count++
//     }
// }
//

//
// let counter = makeCounter();
// let otherCounter = makeCounter();
//
//
// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2
//
// console.log(otherCounter())
// console.log(otherCounter())
// console.log(otherCounter())

//
// let button = document.querySelector('BUTTON')
//
// button.addEventListener('click',()=>{
//     pow(2, 3)
// })
//
// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         console.log(n,'this is n')
//         return x * pow(x, n - 1);
//     }
// }




