// Singleton
// Object.create

// Object Literals

const mySym = Symbol("Key1")

const JSuser = {
    name : "Om",
    age : 23,
    [mySym] : "MyKey",
    email : "patilom887@gmail.com",
    gender : "male",
    isLoggedIn : false
}

console.log(JSuser.name);
console.log(JSuser["name"]);
console.log(JSuser[mySym]);


// JSuser.email = "omhpatil@gmail.com"
// Object.freeze(JSuser)                   // after freeze values cannot be changed 
// JSuser.email = "mailnotchanged@gmail.com"
// console.log(JSuser.email);


JSuser.greeting = function(){
    console.log("This is first fucntion");    
}

JSuser.greetingTwo = function() {
    console.log(`My name is ${JSuser.name}`); 
}

console.log(JSuser.greeting());         // This two function are not printing on console after because we have used freeze 
console.log(JSuser.greetingTwo());

