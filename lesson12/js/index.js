'use strict'
//pattern module
// const myModule = (function() {
//     const myPrivateConst = 'ololo'
//     function myPrivetFunctrion (){
//
//     }
//     function showPrivateConst(){
//         console.log(myPrivateConst)
//     }
//     return{
//         publicMethod: function() {
//             showPrivateConst();
//         },
//         publicMethod2:function(){
//             myPrivetFunctrion()
//         }
//     }
// })();
//
// myModule.publicMethod()


//singletone
//
// let instance = null
//
// function User(name,age){
//     if(instance)return instance
//     instance=this
//     this.name=name
//     this.age=age
//     return instance
// }
//
// let user = new User('Vasya',33)
// console.log(user)
// user = new User('Vasya',22)
// console.log(user)


//fabric

// class User {
//     constructor({name, age, permissions}) {
//         this.name = name || 'Vasya'
//         this.age = age
//         this.permissions = 'user'
//     }
// }
//
// class Admin {
//     constructor({name, age, permissions}) {
//         this.name = name || 'Vasya'
//         this.age = age
//         this.permissions = 'admin'
//     }
// }
//
// class UserFactory{
//     createUser(obj){
//         if(obj.type==='user'){
//             return new User(obj)
//         }else if(obj.type==='admin'){
//             return new Admin(obj)
//         }
//     }
// }
//
// const obj = {
//     name:null,
//     age:25,
//     type:'user'
// }
// const obj2 = {
//     name:null,
//     age:25,
//     type:'admin'
// }
//
//
//
// const factory = new UserFactory();
//
// const user = factory.createUser(obj)
// const admin = factory.createUser(obj2)
//
// console.log(user)
// console.log(admin)


//decorator
//
// function User({name,age}){
//     this.name=name
//     this.age=age
// }
// const users  = [{name:'Vasya',age:35},{name:'Petya',age:17}]
// let result = []
// result = users.reduce((acc,cur)=>{
//     return[
//         ...acc,
//         new User(cur)
//     ]
// },[])
// result.forEach((user)=>{
//     user.setAdult = function(adult) {
//         this.adult = adult;
//     }
//     if(user.age>17){
//         user.setAdult(true)
//     }else{
//         user.setAdult(false)
//     }
// })
//
// console.log(result)
//
//observer
// class EventObserver {
//     constructor() {
//         this.observers = []
//     }
//
//     subscribe(fn) {
//         this.observers.push(fn)
//     }
//
//     unsubscribe(fn) {
//         this.observers = this.observers.filter(subscriber => subscriber !== fn)
//     }
//
//     broadcast(data) {
//         this.observers.forEach(subscriber => subscriber(data))
//     }
// }
//
//
// const getWordCount = (text) => text ? text.length : 0;
//
// const setColor = (elem)=>elem.style.color='red'
//
// function calcLength(elem){
//         const blogCount = document.getElementById('blogWordCount');
//         blogCount.textContent = getWordCount(elem.value);
// }
//
//
// const wordCountElement = document.createElement('p');
// wordCountElement.className = 'wordCount';
// wordCountElement.innerHTML = '<strong id="blogWordCount">0</strong>';
// document.body.appendChild(wordCountElement);
//
//
//
// const blogObserver = new EventObserver();
//
//
// blogObserver.subscribe(calcLength);
//
// blogObserver.subscribe((elem) => {
//     setColor(elem);
// });
//
//
// const blogPost = document.getElementById('text-area');
//
//
// blogPost.addEventListener('input', () => {
//     blogObserver.broadcast(blogPost)
//     setTimeout(()=>{
//         blogObserver.unsubscribe(calcLength)
//     },1000)
// });


