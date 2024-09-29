function calculateCartPrice(...num1){    // ...rest parameter also called spread operator
    return num1
}
console.log(calculateCartPrice(100,200,300));


// function calculateCartPrice(val1,...num1){
//     return num1
// }
// console.log(calculateCartPrice(100,200,300));


const user = {
    username : "Om Patil",
    password : "Password"
}

function handleObjet(anyObject){
    console.log(`Username is ${anyObject.username} and password is ${anyObject.password}`);
}

handleObjet(user)



const Newarray = [1,2,3,4,5]

function returnSecondElement(getArray){
    return getArray[1]
}

console.log(returnSecondElement(Newarray));
