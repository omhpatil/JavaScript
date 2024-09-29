// While using getter and setter u have set name of getter and setter as variable name which u have to access

// Using simple Getter and Setter

class User{
    constructor(username, password){
        this.username = username
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const user = new User('omhpatil', 'abc')
console.log(user.password);


// Using Function based Getter and Setter

