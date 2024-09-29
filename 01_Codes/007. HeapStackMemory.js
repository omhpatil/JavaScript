//Stack Memory: Used for static memory allocation, faster, used for primitive data types, follows LIFO order.

//Heap Memory: Used for dynamic memory allocation, slower, used for objects (reference types), managed by garbage collection in JavaScript.

// stack example

let name = "Om"

let anothername = name 
anothername = "Patil"

console.log(name);
console.log(anothername);

// heap example

let userOne = {
    username: "Om",
    age: "Patil"
}

let userTwo = userOne

userTwo.username = "Omiii"   // here i changed name in userTwo but it also changed in userOne too

console.log(userTwo);
console.log(userOne);


