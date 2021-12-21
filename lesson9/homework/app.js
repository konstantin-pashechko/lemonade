const BASE_URL = 'https://jsonplaceholder.typicode.com'
const list = document.querySelector('.list')
const search = document.querySelector('.search')
const addUserBtn = document.querySelector('.add-user')
const inputName = document.querySelector('#name')
const inputLastname = document.querySelector('#lastname')
let users

search.addEventListener('input',getLikeUser)
list.addEventListener('click', handleEvent)
addUserBtn.addEventListener('click', addUser)

function renderUserList(users){
	list.innerHTML = ''
	users.forEach((item)=>{
		let user = new User(item)
		list.append(user)
	})
}

async function getAllUsers(){
	let resp = await fetch(`${BASE_URL}/users`,{
		method: 'get',
	})
	users = await resp.json()
	renderUserList(users);
}
getAllUsers();

/* Create new User */
function addUser(){
	let name = inputName.value + ' ' + inputLastname.value
	inputName.value = ''
	inputLastname.value = ''
	postUser(name)
}

async function postUser(name){

	try {
		let resp = await fetch(`${BASE_URL}/users`,{
			method: 'post',
			body: JSON.stringify({
				name: name,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})

		if (resp.status === 201 || resp.status === 'Ok') {
			/*
			Здесь можно вызвать getAllUsers(), чтобы пересобрать массив users,
			в котором сейчас нет нового юзера и поиск его не учитывает!
			Но так как новый юзер добавляется
			на сервер фиктивно, то можно добавить его в массив users при помощи array.push()
			*/
			let user = await resp.json()
			let node = new User(user)
			list.append(new User(user))
			users.push(user)
		}
	} catch (e) {
		console.log(e.message)
	}	
}

/* UpUser / DeleteUser */
function handleEvent(e){
	let parentElem = e.target.closest('.user')
	let id = parentElem.dataset.id
	if (e.target.className === 'del') {
		deleteUser(id, parentElem)
	} else if (e.target.className === 'swp') {
		upUserInList(parentElem)
	}
}

async function deleteUser(id, nodeElem) {
	try {
		let resp = await fetch(`${BASE_URL}/users/${id}`, {
			method: 'delete',
		})

		if (resp.status === 200 || resp.status === 'Ok') {
			nodeElem.remove()
		}
	} catch (e) {
		console.log(e.message)
	}
}
function upUserInList(nodeElem){
	let prevElem = nodeElem.previousSibling
	prevElem.before(nodeElem)
}

/* Search */

function getLikeUser(e){
	let filteredArray = users.filter((user)=>{
		return user.name.toLowerCase().indexOf(e.target.value.toLowerCase())!==-1
	})
    renderUserList(filteredArray)
}