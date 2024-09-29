let score = "Om"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)       // Converted string into number
console.log(typeof valueInNumber);
console.log(valueInNumber); // will print NaN because it is not a number

// "33" = 33
// "123abc" = NaN
// true = 1; false = 0

let isloggedIn = 0
let isloggedIn2 = 1

let checkisloggedin1 = Boolean(isloggedIn)
console.log(checkisloggedin1);

let checkisloggedin2 = Boolean(isloggedIn2) 
console.log(checkisloggedin2);

console.log(typeof checkisloggedin);
