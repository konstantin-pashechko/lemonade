// console.log('first')
//
// setTimeout(()=>{
//     console.log('setTimeout')
// },0)
//
// console.log('second')
//

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo')
    }, 300)
})


promise1.then((value) => {
    console.log(value)
    return value + 23
}).then((val) => {
    console.log(val)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('finally')
})
//
// console.log(promise1);
//
//
// try {
// } catch (err) {
//
// }

// const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
// });


const baseUrl = 'https://jsonplaceholder.typicode.com/'

const someObj = {
    title: 'foo',
    body: 'bar',
    userId: 1,
}

fetch(`${baseUrl}todos/1`, {
    method: 'GET',
}).then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err.message, 'this is catch'))

// //axios

//
// fetch(`${baseUrl}posts`, {
//     method: 'POST',
//     body: JSON.stringify(someObj),
//     headers: {
//         'Content-Type': 'application/json',
//     }
// }).then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err.message,'this is catch'))



// async function getTodo() {
//     try {
//         let resp = await fetch(`${baseUrl}todos/1`, {
//             method: 'GET',
//         })
//         let todo = await resp.json()
//         console.log(todo)
//     } catch (err) {
//         console.log(err)
//     }
//     //.then().then().then(()=>{  console.log(todo)})
// }
//
//
// getTodo()


// async function getTodo(){
//   await fetch(`${baseUrl}todos/1`, {
//         method: 'GET',
//     }).then((resp)=>resp.json())
//       .then((val)=>console.log(val))
// }
//
// getTodo()







