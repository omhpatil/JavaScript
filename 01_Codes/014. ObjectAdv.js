// there are two ways we can create objects in js

// 1. const tinderuser = new Object()

// and second is below

const tinderuser = {}

tinderuser.id = "abc123"
tinderuser.name = "Om"
tinderuser.email = "omhpatil@gmail.com"
tinderuser.isLoggedIn = false

//console.log(tinderuser);

const regulaUser = {
    email: "omhpatil",
    fullname: {
        userName: {
            firstname: "Om",
            lastname: "Patil"
        }
    }
}

console.log(regulaUser.fullname.userName);

const obj1 = {1:'A', 2:'B'}
const obj2 = {3:'C', 4:'D'}
const obj3 = {5:'E', 6:'F'}

// using assign method     
const MainObj1 = Object.assign({},obj1,obj2,obj3)  // here if we cannot take {} at starting is also ok but it is called as target in which 
console.log(MainObj1);                             // all sources like obj1, obj2, obj3 are included if we not use {} then obj1 will be target

// by using spread operator merging all the object into one
const MainObj2 = {...obj1,...obj2,...obj3}       
console.log(MainObj2);

//for accessing keys used in object
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

