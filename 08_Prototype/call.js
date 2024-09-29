function setUsername(username){
    this.username = username
}

function User(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new User('omhpatil', 'om@google.com', 'google')
console.log(chai);
 