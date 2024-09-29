const myarr = [1,2,3,4,5,6,7,8,9,10]

// const newNum = []
// myarr.forEach((num) => {                                 //  using for each 
//     if(num>4)
//         newNum.push(num)
// })

// console.log(newNum);


const newArr1 = myarr.filter((num) => (num > 4))            // using filter 

const newArr2 = myarr.filter((num) => {
    return num > 5
})

console.log(newArr1);
console.log(newArr2);


// using map and filter

const mappp = myarr
            .map((num) => num * 10)
            .map((num) => num + 1)
            .filter((num) => num > 40)

console.log(mappp);
