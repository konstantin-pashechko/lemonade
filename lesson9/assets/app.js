const BASE_URL = 'https://jsonplaceholder.typicode.com'
const list = document.querySelector('.list')
const search = document.querySelector('.search')
let posts


search.addEventListener('input',handleInputEvent)

list.addEventListener('click', handleEvent)

// list.removeEventListener('click', handleEvent)

function handleInputEvent(e){
    let filteredArray = posts.filter((post)=>{
        return post.title.toLowerCase().indexOf(e.target.value.toLowerCase())!==-1
    })
    console.log(filteredArray,'filtered')
    //1.delete all posts
    //2.call function createElement and render filtered posts
    //3. if input
}


function handleEvent(e) {
    let parentElem = e.target.closest('.post')
    let id = parentElem.dataset.id
    if (e.target.className === 'del-btn') {
        deletePost(id, parentElem)
    } else if (e.target.className === 'swap-btn') {
        upUserInList(parentElem)//homework
    }
}

//homework
function upUserInList(elem) {
    //homework
    let prevElem = elem.previousSibling
    console.log(prevElem)
}


async function deletePost(id, nodeElem) {
    try {
        let resp = await fetch(`${BASE_URL}/posts/${id}`, {
            method: 'delete'
        })
        if (resp.status === 200 || resp.status === 'Ok') {
            nodeElem.remove()
        }
    } catch (e) {
        console.log(e.message)
    }
}

//homework
function createElement(post) {
    let div = document.createElement('div')
    let span = document.createElement('span')
    let deleteButton = document.createElement('button')
    let swapButton = document.createElement('button')
    div.className = 'post'
    div.dataset.id = post.id
    span.className = 'post-title'
    span.textContent = post.title
    deleteButton.className = 'del-btn'
    swapButton.className = 'swap-btn'
    deleteButton.textContent = 'X'
    swapButton.textContent = '^'
    div.prepend(span)
    div.append(deleteButton)
    div.append(swapButton)
    list.append(div)
}

function renderPosts(data) {
    data.forEach(item => createElement(item))
}

async function getAllPosts() {
    let resp = await fetch(`${BASE_URL}/posts`, {
        method: 'get',
    })
    //JSON.parse(resp)
    posts = await resp.json()
    renderPosts(posts)
}

getAllPosts()


// item.name.toLowerCase().indexOf(this.searchByCart.toLowerCase()) >= 0
