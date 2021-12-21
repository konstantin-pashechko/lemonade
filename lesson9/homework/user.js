'use strict'
function User(user){
	this.id = user.id
	this.name = user.name
	this.btnDel = create('button','X','del')
	this.btnSwp = create('button','^','swp')
	this.nameNode = create('div',this.name)
	this.node = create('div','','user')

	this.init = () => {
		this.node.append(this.nameNode)
		this.node.append(this.btnDel)
		this.node.append(this.btnSwp)
		this.node.dataset.id = this.id
		return this.node
	}

	return this.init()
}

function create (sel,val = '',className=''){
	let elem = document.createElement(sel)
	let text = document.createTextNode(val)
	elem.append(text)
	elem.className = className
	return elem
}