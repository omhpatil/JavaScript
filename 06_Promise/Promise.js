// if u got a error 404 while using promise in which part it will consist in resolve or in reject 
// so it it is came in response part as a response because it not a error it is response

/*
When you receive a 404 error while using a promise in JavaScript, it will generally be handled in the
resolve part, not the reject. This is because a 404 is still a valid HTTP response, meaning the request
was successfully processed, but the resource was not found. Therefore, the promise resolves with a
response object, even though the status code indicates an error.
*/

// Promise One 

const promiseOne = new Promise(function(resolve, reject){
    // Do any task 
    // Do Database call, cyptography, newtwork

    setTimeout(function(){
            console.log("Async task is completed");
            resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})


// Promise Two

new Promise(function(resolve, reject){
    setTimeout(function(){
            console.log("Async task 2 is completed");
            resolve()
    }, 1000)
})
.then(function(){
    console.log("Promise 2 Consumed"); 
})


// Promise Three

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
            console.log("Async task 3 is completed");
            resolve({username: 'username', password: 'password'})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


// Promise Four

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
            let error = true;
            if(!error){
                resolve({username: 'username', password: 'password'})
            }
            else{
                reject("Something went wrong");  
            }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
}).catch(function(error){
    console.log(error);
})