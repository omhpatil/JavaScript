const User = {
    username: 'Om Patil',
    email: 'patiom887@gmail.com',
    singedIn: true,
    gotUserDetails: function(){
        console.log("Got User details from database");
        console.log(this);
    }
}

console.log(this);      // will print only emtyp curly braces bcoz there is nothing in global content


console.log(User);
console.log(User.username);
console.log(User.gotUserDetails());
