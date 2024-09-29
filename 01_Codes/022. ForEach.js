// accessing array elements using arrow function
const arr = [1,2,3,4,5]
arr.forEach( (item) => {
    console.log(item);
});


// accesing array element using simple method by function
const arrVal = ["Om", "Viraj", "Vikas", "Jay", "Prabhu"]
arrVal.forEach(function (value) {
    console.log(value);
})


// By using new function
function PrintMe(value){
    console.log(value);
}
arrVal.forEach(PrintMe)         // We have given only reference of function only not using function directly, reference is when without using ()


//accessed value index and whole array
arrVal.forEach( (value, index, arr) => {
    console.log(value, index, arr);
})


//accessed value index and whole array
arr.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})



// accessing object proporties using for each loop 
const myCoding  = [
    {
        languageName: "Java",
        languageFile: "java"
    },

    {
        languageName: "JavaScript",
        languageFile: "JS"
    },

    {
        languageName: "Python",
        languageFile: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageFile);
})