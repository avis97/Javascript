/*Array in Java Script
array is a like free of container, we can store group of value with same datatype.
but in javascript array its have some differences between java array like
we can store number string in the same array*/

const arr=[1,3,4,5,2];
for(let i=0;i<arr.length;i++){  // arr.length this method use for find the size of the array
    console.log(arr[i]);
}
// also we can new element in this array-->
console.log(arr) //1,2,3,4,5 
arr.push(6);  // push method help to add ne value in this array....
console.log(arr);
arr.pop()  //  pop method help remove last element in the array//
console.log(arr);
arr.shift() // shift method use for delete element from start position
console.log(arr); 
arr.unshift(7) // unshift method use for add into first position... 
console.log(arr)
console.log(arr.sort()); // sort the array by array.sort() method...

let arr1=["Avishek","Anup","Misti"];
console.log(arr1);  // we can store String in the array like this...
let joinArray=arr1.concat(arr);
console.log(joinArray); /// join more than one array and hold another variable..

let arrWithString=[1,2,"Avishek"];
console.log(arrWithString)
let ansarr=arrWithString.toString(); // convert a array to String... 
console.log(ansarr)

// we can take array like this 

const car=new Array("BMW","Audi","Volks wagon","TATA");
console.log(car);

// we can also made object by array ==>>
const person={
    name:"Avishek",
    age:26,
}

console.log(person.name);   //Array Elements Can Be Objects ... array element special type of array/....



