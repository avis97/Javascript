/* Method and function in js--> we can know in js have 3 type of method 
like 1> normal function 2> arrow function 3> ananomas  function.
when i write a function with a object this are called Method.*/

//normal function->

function sum(){
    console.log("Hello Javascript");
    // also we can return any think.
}
sum(); // we can get the value

// write a method with parameter like-->>
function fun(a,b){
    return a+b;
}
fun(1,2) // we will get 3 by this function  

// Arrow function -->>

const hello=()=>console.log("Hello Javascript with arrow function."); // this is are arrow function
const mul=(a,b)=>(a*b) // it will be print multiplication of a and b
console.log(mul(3,4));
hello();  // call the hello arrow function
// if want to return i arrow function have to return by curly bracket-->
const Name=(name)=>{
    return name; // the is return the name...
}
console.log(Name("Avishek"));

//ananomas function.
//if a function dont have any name this function call as ananomas function....

const print=function(){
    console.log("Lets Start With Ananomas function");
}
print();

// forEach loop in array-->
// forEach loop not make a new Array..just help to perform operation with all element..
// forEach method is a Higher Order function
// if a function pass another method by parameter this is called high order method like forEach and map() method  
let arr=[1,2,3,4,5];

arr.forEach((key,indx,arr)=>{        // this is forEach loop in javascript use for Array or list type operation on js...
    console.log(key+" "+indx+" "+arr);// key return the element, indx return the index and arr return the array/..
}); // but we can use the key more in for each loop.

// map methods-->
// map its also same with forEach method but map create a new array with the result...

let arrName=["Avishek","Anushree","Anup","sangita"];
const naeName=arrName.map((name)=>{
    return name+" Sarkar";  // add the sarkar string for every array element..
})
// this map method are same of stream apis in java******
console.log(naeName);

//filter method use for do condition with the element like
const nums=[1,2,3,4,5];
const ansnm=nums.filter((num)=>{  // filter the element by condition in any array..

    return num%2!==0;
})
console.log(ansnm);

// also have so many method in js ...
