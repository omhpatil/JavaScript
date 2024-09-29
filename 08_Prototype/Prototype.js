let username = 'omhpatil   ';

String.prototype.trueLength = function(){
    console.log(`True length of string is: ${this.trim().length}`);
    console.log(`Overall length of string is: ${this.length}`);
    
}

username.trueLength();

// Here i created my own prototype which will print the string length by removing white spaces and also with white spaces

