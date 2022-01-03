'use strict'

// let obj = Object.create(null)
// obj['key'] = 56
//console.log(obj.hasOwnProperty('key'))
//console.log(Object.prototype.hasOwnProperty.call(obj,'ololo'))


// (function () {
//
// })()
//
//
// (function () {
// })()


// let obj = {}
// class/new
//let obj = Object.create()


// let someObj = {
//     name:'Fedor'
// }
//
// function getName(){
//     console.log(this.name)
// }
//
// getName.bind(someObj)()
// getName.call(someObj)
//
// getName.apply(someObj,...rest)

//
// initGame(document.querySelector('#game1'))//instance
//
//
//
// function initGame(game) {
//     var field = createGameField(game);
//     var size = 2;
//     newGame();
//     function newGame() {
//         clearGameField(field);
//         var cells = drawGameField(size, field);
//         addActivateHandler(cells);
//     }
//     function addActivateHandler(cells) {
//         var counter = 1;
//         for (var i = 0; i < cells.length; i++) {
//             cells[i].addEventListener('click', function() {
//                 if (this.innerHTML == counter) {
//                     this.classList.add('active');
//                     if (counter == size * size) {
//                         size++;
//                         newGame();
//                     }
//                     counter++;
//                 }
//             });
//         }
//     }
// }
//
// function createGameField(game) {
//     var table = document.createElement('table');
//     game.appendChild(table);
//     return table;
// }

// function clearGameField(field) {
//     field.innerHTML = '';
// }
//
// function drawGameField(size, field) {
//     var from = 1;
//     var to = size * size;
//
//     var arr = [];
//     arr = createArr(from, to);
//     arr = shuffleArr(arr);
//     arr = chunkArr(size, arr);
//     return createCells(arr, field);
// }
//
// // [[1, 2], [3, 4]]
// function createCells(arr, elem) {
//     var cells = [];
//
//     for (var i = 0; i < arr.length; i++) {
//         var tr = document.createElement('tr');
//         for (var j = 0; j < arr[i].length; j++) {
//             var td = document.createElement('td');
//             td.innerHTML = arr[i][j];
//             tr.appendChild(td);
//             cells.push(td);
//         }
//         elem.appendChild(tr);
//     }
//     return cells;
// }
//
// function createArr(from, to) {
//     var arr = [];
//     for (var i = from; i <= to; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
//
// function shuffleArr(arr) {
//     var result = [];
//     var length = arr.length;
//
//     for (var i = 0; i < length; i++) {
//         var random = getRandomInt(0, arr.length - 1);
//         var elem = arr.splice(random, 1)[0];
//         result.push(elem);
//     }
//
//     return result;
// }
//
// // [1, 2, 3, 4, 5] -> [[1, 2], [3, 4], [5]]
// function chunkArr(n, arr) {
//     var result = [];
//     var iterCount = Math.ceil(arr.length / n);
//     for (var i = 0; i < iterCount; i++) {
//         var elems = arr.splice(0, n);
//         result.push(elems);
//     }
//     return result;
// }
//
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

//0-empty,1 - x,2 - o
let cells = document.querySelectorAll('#field td');

function initGame(){
    for(let i=0;i<cells.length;i++){
        let className = (i%2===0)?'active-cross':'active-zero'
        cells[i].addEventListener('click',(e)=>handleEvent(e.target,className))
    }
}

function handleEvent(elem,className) {
    if (elem.tagName === 'TD' && elem.dataset.check !== 'checked') {
        elem.classList.add(className)
        elem.dataset.check='checked'
        checkWin()
    }
}

function checkWin(){
    let cells = document.querySelectorAll('#field td');
    for(let i=0;i<schema.length;i++){
//         1)includes
//         2)filter
//         3)for&for
    }
}

const schema = [[0,1,2],[0,3,6]]

initGame()
