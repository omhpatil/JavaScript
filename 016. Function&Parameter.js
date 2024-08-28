function myFun() {
    console.log("O")
    console.log("m")
    console.log("P")
    console.log("a")
    console.log("t")
    console.log("i")
    console.log("l")
}

// myFun()
// function addTwoNumbers(num1, num2){
//     return num1 + num2
//     console.log("Hitesh");   // this line will not be printed bcoz after return statement the code cannot be executed in JS
// }
// console.log(addTwoNumbers(10,12))



//uisng third variable
function addTwoNumbers(num1, num2){
    let result = num1 + num2            // this result variable is different from below result variable
    return result 
}
const result = addTwoNumbers(10,12)     // this result variable is different from above result variable
console.log(result);


// using username is valid or not
// function loginUsername(username){
//     if(username===undefined){
//         console.log("Please enter valid username");
//         return
//     }
//     return `${username} is logged in`
// }
// console.log(loginUsername("Om Patil"))
// console.log(loginUsername());



//another method
function loginUsername(username = 'OP'){        // default value of username is set to 'OP' thats why alwasys if cond is not working
    if(!username){
        console.log("Please enter valid username");
        return
    }
    return `${username} is logged in`
}
console.log(loginUsername());


