export default class User{
    static loging(){
        return Date.now()
    }

    constructor(name,lastname){
        this.name=name
        this.lastname=lastname
    }
    getName(){
        console.log(this.name)
    }
}

