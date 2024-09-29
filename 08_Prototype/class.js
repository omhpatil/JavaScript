class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
}
//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

const print = new User('Om','om@google.com', 123)
// console.log(print);
// console.log(print.encryptPassword());
// console.log(print.changeUsername());

// Prototype Created

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


console.log(print.encryptPassword());
console.log(print.changeUsername());






