const arr = [1,2,3]

//uaing reduce method
const total1 = arr.reduce(function (acc,currval) {
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
}, 0) // given value 0 to accumlator

console.log(total1);


//using arrow function
const total2 = arr.reduce((accc, currvall) =>{
    console.log(`acc : ${accc} and currval : ${currvall}`);
    return accc + currvall
}, 3)

// const total2 = arr.reduce((accc, currvall) => accc + currvall, 3)        // in single line using arrow function

console.log(total2);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => 
{
return accumulator + currentValue
}, 0);
console.log(sum); // Output: 15
