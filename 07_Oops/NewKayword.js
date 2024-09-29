function User(username, logincount, isLoggedIn){
    this.username = username
    this.logincount = logincount
    this.isLoggedIn = isLoggedIn

    // return this - is optional
}

let UserOne = new User('Om', 2, true);
let UserTwo = new User('Prabhu', 3, false)
console.log(UserOne);
console.log(UserTwo);

/*
New Keyword: 
    1. When you use new keyword empty object is created bydefault
    2. Constructor function is called
    3. This keyword inject inside it automatically
*/