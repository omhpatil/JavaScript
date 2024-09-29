class JS{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    SayHello(){
        console.log(`hello ${this.name}, My age is ${this.age} `);
        
    }
}

let obj = new JS("Om", 23);
obj.SayHello();

