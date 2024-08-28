// IIFE - Immediately Invloked Function Expression

// while writing two IIFE please dont forgot to use `;` after first one IIFE 

//Simple example 

    (function() {
        console.log("Hello, I am an IIFE!");
    })();


// Using arrow

    ( (name) => {
        console.log(`Hello, I am an IIFE ${name}`);
    })('using arrow function');



// Another Example 

    (function() {
        var secret = "This is a secret message";
        console.log(secret); // Output: "This is a secret message"
    })();

    //console.log(secret); // Error: secret is not defined



