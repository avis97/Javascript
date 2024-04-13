// lets start with Javascript operator...
/* in javascript some operator like unary, arithmetic, comparison,string,assignment,logical,bitwise,ternary,type.*/

//unary operator 

let x=1;
console.log(x++);  // it will print 1 // take action from next line this call post-increment  x++,take after the variable .
console.log(++x)// it will print 3  // take action from same line its call pre-increment ++x, take before the variable.

// this is alto work as a pre-decrement and post-decrement operator like (x--), (--x)
x=5;
console.log(x--) //it will print 5
console.log(x) //it will print 4; post-operator take action from next line..
console.log(--x)// it will print 3 because pre-operator take action for same line...

//arithmetic operator are here +,-,*,/,% use for normal Math type operation like
let a=10;
let b=5;
let c1=a+b; // but if use sum for two string it concat the string also. 
let c2=a-b;
let c3=a*b;
let c4=a/b;
let c5=a%b;
console.log(c1,c2,c3,c4,c5);
// for + plus operator have some specific property in Javascript like
let s=4;
let h="5";
console.log(s+h)// its print 45 ,, type casting automatic happen in javascript...
console.log(h+s)// its print 54..
// but in this case--->
let r=3;
console.log(s+r+h)// its print 75, 
console.log(h+s+r)// its print 543

// but if use other operator like *
let ans=s*h // print 20 because its convert in number;
console.log(ans+"->"+s*h);
// if i try to multiply with a string give NaN Not a Number like-->
console.log(s*"a"); //return NoN its a object os javascript...


// assignment operator are here like +=,-=,*=,/=,%=,= this is basically short form of arithmetic operator...
// if i use fom sum like a=a+b we can use also assignment operator for same work sum like a+=b;
// it(a+=b) is also give me same result of a=a+b operation.

a+=b;
console.log(a);// get result 15
a-=b;
console.log(a); // get result 5 again

// this same think happened for all assignment operator.

//---->>> lets start with comparison operator in javascript 
// in javascript comparison operator are ==,!=,===,!==, <=,>=,<,>,?

// lets check == equal operator-> its check with value but not the data type. like

let as="5";
let ar=5;
console.log(as==ar)// return true because it just check with value not datatype
console.log(as===ar) // return false because its check the value with datatype.
console.log(as!=ar) // return false because its check only the value...
console.log(as!==ar) // return true because its check with the datatype and return true..

// take a example ternary operator---->>>    
let checkTernary= (as===ar) ? "Its Same with datatype":"Its not same with datatype"
console.log(checkTernary)  // get Its not same with datatype

// typeof is basically help to get the type of variable 
console.log(typeof(as)) // return string--
console.log(typeof(ar))// its return number--

//lets start with logical operator this same as a java.
// there have main two logical operator like and(&&) and (||) or-operator  or not(!) operator.

//this is example of && operator
if(as===5 && ar===5){
    console.log("true");  //
}else{
    console.log("False");  // get return false because its check with all condition then return true..
}

// this is example of || or operator
if(as===5 || ar===5){
    console.log("true");  //get return true because its check with one condition then return true..
}else{
    console.log("False");  // 
}




