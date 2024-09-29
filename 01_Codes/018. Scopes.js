console.log(addOne(5))

function addOne(num){
    return num + 1
}

// console.log(addTwo(5))        // we have holded in variable by declaring function that is why it gives error 

const addTwo = function(num){
    return num + 2
}




function One() {
    const username = "hitesh"

    function two(){
        const website = " youtube"
        console.log(username + website);
    }

    two()
}

One()