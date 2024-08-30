const myMap = new Map([
    ['name', 'Alice'],
     ['age', 30],
     [true, 'isActive']
]);	

// for each

myMap.forEach((keys,values)=>{
    console.log(keys+ ":-" + values);
})



// for of
for (let items of myMap) {
    console.log(items);
}


// for...in is not suitable for iterating over Map elements because it is designed to 
// iterate over enumerable properties of an object, not Map entries.

for (let key in myMap) {
    console.log(myMap[key]);
}