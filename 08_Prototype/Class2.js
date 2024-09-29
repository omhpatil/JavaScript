class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        return `Username is ${this.username}`
    }
}

class newUser extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        return `Username is ${this.username}`
    }
}

const user = new User('Om')
console.log(user.logMe());
// console.log(user.addCourse());       // it will provide error because user cannot direct call addCourser method because it is not inherited


const tea = new newUser('omhpatil', 'om@patil.com', '123')
console.log(tea.addCourse());
console.log(tea.logMe());

console.log(user === tea);

console.log(tea instanceof newUser);
console.log(user instanceof newUser);




