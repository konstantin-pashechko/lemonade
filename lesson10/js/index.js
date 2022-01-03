// const protoObj = {
//     name:'Vasya',
//     //method
// }
//
// const obj ={
//     lastName:'Pupkin'
// }
// obj.__proto__=protoObj
//
// console.log(obj)
// console.log(obj.name,'this is obj name')

// function User(name,age){
//     this.name=name
//     this.age=age
//     //getAge
// }
//
//
// User.prototype.getAge = function getAge(){
//     console.log(this.age)
// }
//
// const user = new User('Vasya',25)
//
// user.getAge()


// class User{
//     address = 'Symskaya 5'
//     counter = 0
//     constructor(name,age){
//         this.name=name
//         this.age = age
//     }
//     getAge(){
//         console.log(this.age)
//     }
//     getQuantity(){
//         counter++
//     }
// }
//
// const user = new User('Petya',49)
//
// console.log(user)

//
// class User {
//     _counter = 0
//
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     getAge() {
//         console.log(this.age)
//     }

//     set counter(value){
//         if(typeof value === 'number') this._counter=value
//     }

//     get counter(){
//         return this._counter
//         //console.log(this._counter)
//     }
// }

// const user = new User('Vasya', 66)
//
// user.counter = 67
// //user._counter=7878
// console.log(user.counter)


// class User {
//     #counter = 56
//
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     getAge() {
//         console.log(this.age)
//     }
//     getCounter(){
//         console.log(this.#counter)
//     }
// }
//
//
// const user = new User('Vasya', 66)
// console.log(user)
// console.log(user.getCounter())
//
// user.#counter=89898
//
// console.log(user.#counter,'this is #counter')

//
// class Animal {
//     constructor(name, food) {
//         this.name = name
//         this.food = food
//     }
//     eat(){
//         console.log(`eat with this context ${this.food}`)
//     }
// }
//
// class Bird extends Animal{
//     action(){
//         //return a+b+c
//         console.log(`living`)
//     }
// }

// const bird = new Bird('bird','apple')

//
// class Aligator extends Bird{
//     swim(){
//         console.log(`aligator swiming`)
//     }
//     action(){
//         super.action()  // this
//         console.log(`aligator  eating people`)
//     }
// }
//
// const aligator  = new Aligator('aligator','human')
//
// console.log(aligator)
// aligator.swim()
// aligator.action()



class User{
    constructor(name,lastname){
        this.name=name
        this.lastname=lastname
    }
    getName(){
        console.log(this.name)
    }
}


const user = new User('John','Travolta')
console.log(User.loging(),'1')
setTimeout(()=>{
    const user2 = new User('huu','chai')
    console.log(User.loging(),'2')
},10)
setTimeout(()=>{
    const user2 = new User('huu','chai')
    console.log(User.loging(),'3')
},20)





//1this = {}
//2 this.name=name {name:'nameValue'}
//3 const user = // this === user





