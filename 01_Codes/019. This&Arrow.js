// const person = {
//     name: "John",
//     greet: function() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
//   };
  
// person.greet(); // Output: "Hello, my name is John"
  

// // Regular function
// function add(a, b) {
//     return a + b;
// }

// // Arrow function
// const add = (a, b) => a + b;

// const square = x => x * x;
// console.log(square(4)); // Output: 16



// const person1 = {
//     name: "Jane",
//     greet: function() {
//       // Regular function for method
//       setTimeout(function() {
//         console.log(`Hello, my name is ${this.name}`);
//       }, 1000);
//     }
//   };
  
// person1.greet(); // Output: "Hello, my name is undefined" (or error in strict mode)
  
      
const person = {
    name: "Jane",
     greet: function() {
       // Arrow function for callback
       setTimeout(() => {
         console.log(`Hello, my name is ${this.name}`);
           }, 1000);
          }
};

person.greet(); // Output: "Hello, my name is Jane"



