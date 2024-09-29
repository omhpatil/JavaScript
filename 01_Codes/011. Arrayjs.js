// In JS, arrays are resizable and can be contain a mix of different data types.
// JS, arrays are not associative arrays, so the array elements can be accessed using positive values only not negative values.

let arr1 = [1,2,3,4,5]
let arr2 = ["Om","Patil"]
let arr3 = new Array(1,2,3,4,5)

console.log(arr1);
console.log(arr2);
console.log(arr3[1]);

// Array Methods

arr1.push(6);
console.log(arr1);

arr1.pop()
console.log(arr1);

arr1.unshift(9)      // placed 9 at the starting of array means at 0'th position
console.log(arr1);

arr1.shift()
console.log(arr1);   // which shifts the first array element (mean remove)

console.log(arr1.includes(9));
console.log(arr1.indexOf(1));


// slice  

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Using slice to extract a portion of the array
let slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits); // Output: ["banana", "cherry"]
console.log(fruits);       // Output: ["apple", "banana", "cherry", "date", "elderberry"]


// splice


let fruits1 = ["apple", "banana", "cherry", "date", "elderberry"];

// Using splice to remove 2 elements starting from index 1
let removedFruits = fruits1.splice(1, 2);

console.log(removedFruits); // Output: ["banana", "cherry"]
console.log(fruits1);        // Output: ["apple", "date", "elderberry"]


// slice 

let array = new Array(1,2,3,4)
console.log(array);
const slice_arr = array.slice(1,2)
console.log(slice_arr);
console.log(array);

// splice

const splice_arr = array.splice(1,3) 
console.log(splice_arr);
console.log(array);

