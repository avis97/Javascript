// string is non-primitive datatype in javascript..
// we can take string by this "",'', and also bac-tick `` after ES6

let s="Avishek";

console.log(s)// it print Avishek here...
// but string have some pre-define function fro some operation
console.log(s.toLowerCase());
console.log(s.toUpperCase());
// charAt method use for take nay word in the string like
console.log(s.charAt(1)); // its will print v
console.log(s.split("").sort());  //its sort the String in ascending order

console.log(s.startsWith("A"));  // this a also method in java Script...

let t=s.concat(" Sarkar"); //String not concat with other String due to titeral its make a new String for concat like Java
console.log(t);
console.log(t.length())// return length og string.. 
// the plus(+) operator also use for concatenation two string.

// we can also print the String in bac-tick-->? ` `
console.log(`my name is Avishek Sarkar my age is ${26} year old`);  //we can easyly write our String in the concat.

