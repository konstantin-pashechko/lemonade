// 'use strict'
//
// let block = document.querySelector('.block')
// let inputs = block.querySelectorAll('.block__input')
// let button = block.querySelector('.block__button')
// let list = document.querySelector('.users-list')
// let users = []
//
// button.addEventListener('click', createObject)
//
// list.addEventListener('click', (e) => {
//     if (e.target.tagName === 'BUTTON') {
//         let parent = e.target.closest('li')
//         let index = parent.dataset.id
//         users.splice(index,1)
//     } else {
//         console.log('click outer button')
//     }
// })
//
// function createObject() {
//     let obj = {}
//     for (let input of inputs) {
//         obj[input.dataset.name] = input.value
//         input.value = ''
//         // input.value = 'new value'
//         // console.log(input.value)
//     }
//     users.push(obj)
//     // console.log(list.childNodes)
//     // deleteElement()
//     renederElements()
// }
//
// // function deleteElement(){
// //     for(let child of list.childNodes){
// //         console.log(child)
// //         child.remove()
// //     }
// // }
//
// function renederElements() {
//     for (let i = 0; i < users.length; i++) {
//         createDomElement(users[i], i)
//     }
// }
//
// function createDomElement(user, id) {
//     let li = document.createElement('li')
//     let span = document.createElement('span')
//     let button = document.createElement('button')
//     span.className = "user__name"
//     span.textContent = user.name + ' ' + user.lastname
//     button.textContent = 'click me'
//     li.dataset.id = id
//     li.append(span)
//     li.append(button)
//     list.append(li)
// }
//
//
// // beforeUnmount(){
// //     button.removeEventListener('click',createObject)
// // }
//
//
// // data(){
// //     pass:'',
// //         confirMPAss:''
// // }
// //
// // checkPass(){
// //
// // }
//
//
// // let elem = document.querySelector('.first_span')
// // elem.textContent='new text'
// // console.log(elem)
//
// // let parentBlock = document.querySelector('.block');
// // console.log(parentBlock)
// //
// // // let firstChild = parentBlock.querySelector('.block__title');
// //
// // let firstChild = parentBlock.firstChild;
// //
// // console.log(firstChild)
// //
// //
// // let nodeChildren = parentBlock.childNodes
// //
// //
// // for(let node of nodeChildren){
// //     console.log(node)
// // }
// // console.log(nodeChildren)
//
//
// // function createArray(arrLength){
// //     let arr = []
// //     let str = ''
// //     for(let i = 0;i<arrLength;i++){
// //         str+='x'
// //         arr.push(str)
// //     }
// //     console.log(arr)
// // }
// let mainBlock = document.querySelector('.wrapper')
// let nestedBlock = document.querySelector('.test')
// let button = document.querySelector('.test__button')
//
// button.addEventListener('click',(e)=>{
//     e.stopPropagation()
//     console.log('click on button')
// })
// nestedBlock.addEventListener('click',()=>{
//     console.log('click on nestedBlock')
// })
// mainBlock.addEventListener('click',()=>{
//     console.log('click on mainBlock')
// })


// //
// // createArray(10)
//
//


// function getRecursion(a, b) {
//     if (a === b) {
//         console.log(a)
//     } else {
//         if (a < b) {
//             getRecursion(a + 1, b)
//         } else {
//             getRecursion(a - 1, b)
//         }
//     }
// }
//
// getRecursion(100, 110)


function getNumbers(num) {
    if (num < 1) {
        return num
    }else{
        console.log(num)
        return getNumbers((num - num % 10) / 10)
    }
    // console.log(num%10)
    // console.log(num%10)
}

getNumbers(454)
//
// let str ='Some string ololo super puper'
//
// function ucfirst(str){
//     let arr = str.split(' ')
//     let res = []
//     for(let word of arr){
//         res.push(word.substr(0,1).toUpperCase()+''+word.substr(1,word.length))
//     }
//     console.log(res)
//     let newStr = res.join(' ')
//     // str = arr.join(' ')
//     console.log(newStr)
//
// }
//
// ucfirst(str)


// //
//
//
// function getRecursion(num){
//     if(num===1){
//         console.log(num)
//         return num
//     }else{
//         console.log(num)
//       return getRecursion(num-1)
//     }
// }



let number = 78
let step = 1

function getRecursion(num){
    if(num===number){
        console.log(num,'thi sis if')
        return num
    }else{
        console.log(num,'this ios else')
      return getRecursion(num+1)
    }
}

getRecursion(step)
