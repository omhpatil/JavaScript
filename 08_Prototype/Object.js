function CreateUser(username, price){
    this.username = username 
    this.price = price
}

CreateUser.prototype.printMe = function(){
    console.log(this.price);
}

const tea = new CreateUser('omhpatil', 25);
const chai = new CreateUser('omhpatil7', 250);

tea.printMe();
chai.printMe();

