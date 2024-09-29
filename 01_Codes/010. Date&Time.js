// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear()); 
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getTime());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());

console.log(`the day is ${newDate.getDay()} and the month is ${newDate.getMonth()+1}`);

const specificDateTime = new Date(2024, 7, 23, 10, 30); // Note: Month is 0-based (0 = January, 7 = August)
console.log(specificDateTime);