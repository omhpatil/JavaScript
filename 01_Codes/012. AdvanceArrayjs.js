// merging two array into one

const arr1 = [1,2,3]
const arr2 = [4,5,6]

// arr1.push(arr2)         //output  : [ 1, 2, 3, [ 4, 5, 6 ] ]
// console.log(arr1);

// let newarr = arr1.concat(arr2)      //output : [ 1, 2, 3, 4, 5, 6 ]
// console.log(newarr);

let newarray = [...arr1, ...arr2]     // ... is spread oprator which is used to merge more than one arrays directly into one array
console.log(newarray);                // concate is used to merge two array if we have to merge more than two we use spread operator



console.log(Array.isArray("OmPatil"));
console.log(Array.from("Patil"));
console.log(Array.from({name: "Patil"})); // will give empty array bcoz we have to make array of key or values 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



