const fname = 'Om'
const surname = 'Patil'

//console.log(fname + " " + surname);

console.log(`my fname is ${fname} and my surname is ${surname}`); // use back slash which is located left to button no 1

const getName = new String("OM PATIL")

// string method

console.log(getName);
console.log(getName[0]);
console.log(getName.__proto__);
console.log(getName.length);
console.log(getName.toLowerCase());
console.log(getName.toUpperCase());
console.log(getName.charAt(3));
console.log(getName.indexOf('P'));
console.log(getName.substring(0,2));    // in substring we cannot assign negative value
console.log(getName.slice(-8,8));       // in slice we can assign negative value at start position 

const removewhitespaces = "     Space       "
console.log(removewhitespaces);
console.log(removewhitespaces.trim());


let url = "https://ompatil.com/om%20patil";
console.log(url.replace('%20', '-'));

console.log(getName.split(' '));


