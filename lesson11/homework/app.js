'use strict'

function initGame(){
	let box = document.querySelector('#box');
	let gamer1 = [];
	let gamer2 = [];
	let counter = 0
/*Проверка выигрышной комбинации*/
	function checkWin(gamer,name){
		if(gamer.length < 3){return false}
		let rows = {0:0,1:0,2:0}
		let cols = {0:0,1:0,2:0}

		gamer.forEach((item)=>{
			rows[item.row] = rows[item.row] + 1
			
			cols[item.col] = cols[item.col] + 1
		})

		if(
			(Object.values(rows).includes(3)) || 
			(Object.values(cols).includes(3)) ||
			(rows[0] == cols[0] && rows[1] == cols[1] && rows[2] == cols[2])
		){
			box.append(`${name} is Winner!`)
		}
	}
/*Конструктор для ячейки*/
	function Sell(row, col){
		this.val = null
		this.row = row
		this.col = col
		this.handleEvent = (node)=>{
			if(this.val === null){
				if(counter%2 === 0){
					node.innerHTML = 'X'
					this.val = 'X'
					gamer1.push(this)
					checkWin(gamer1,'X')
				} else {
					node.innerHTML = '0'
					this.val = '0'
					gamer2.push(this)
					checkWin(gamer2,'0')
				}
				counter++;				
			}

		}
		this.init = ()=>{
			let node = document.createElement('div')
			node.className = 'cell'
			node.addEventListener('click', (e)=>this.handleEvent(e.target))
			return node
		}

	}
/*Рендер*/	
	(function (){
		for (let i = 0; i < 3; i++){
			for (let j = 0; j < 3; j++){
				let sell = new Sell(i,j)
				box.append(sell.init())
			}
		}		
	})()
}

initGame()