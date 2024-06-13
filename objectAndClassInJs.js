/* class is a group of object with have same property or same type of method.we can this blue print from 
which object are created. class just logical entity only..not exist physically.
* object is a real world entity physically exist with some property.*/

// before ES6 class did not present in js.

const student={
    name:"Avishek",
    age:26,
    address:"Barasat",
    print(){
        console.log(this.age); // we can also create method in the object;
    }
}
student.print();
console.log(student);
student.address="Kolkata"; // we can chang the value by this variable..
console.log(student.address);


// create the function by new keyword before ES6...
function person(name,age,address){
    this.name=name,
    this.age=age,
    this.address=address;
}
const pr1=new person("Avishek",26,"Barasat");
pr1.address="Kolkata";
console.log(pr1);

// after ES6 we can create object with class form --->

class Computer{
    constructor(brand,price,modelUmber,){
        this.brand=brand;
        this.price=price;
        this.modelUmber=modelUmber;
    }
    print(){
       console.log("Ok this is my computer->"+this.brand);
    }
}
class Laptop extends Computer{
    constructor(brand,price,modelUmber,displaySize){
        super(brand,price,modelUmber);
        this.displaySize=displaySize;
    }
    display(){
        super.print();
        console.log(this.brand+" "+this.displaySize);
    }
}
const com=new Computer("Hp",38000,14);
com.print();
const lp=new Laptop("Dell",50000,14,15);
lp.display();

// this and super is reference keyword -->this refer in current class but super is refer lst parent class method
// and constructor also.


