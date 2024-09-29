class User{
    constructor(username){
        this.username = username
    }

    static createID(){
        return '123'
    }
}

const user = new User('omhpatil')
console.log(user);
console.log(user.createID);     // cannot accessed because defined as static 

