/* we can learn about Javascript from here */

// we can take data by data type with veriable..
// veriable name of the memory location..
// var,let,const are key for take the veriables..
// const are provide constant value and let or var are same but var not flow the scope condition.. loke--:

let a=5;
console.log(a);
a=6;
console.log(a);
const b=10;
console.log(b);
//b=50;
console.log(b);  // get a error

var nam="Avishek";
console.log(nam);
if(true){
    let a=10;
    var nam="Sarkar";   // not maintain the scope in javascript..
}
console.log(a);   // its print 6
console.log(nam);  // but its print Sarkar