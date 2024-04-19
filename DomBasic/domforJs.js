
/*first thing in javascript we can control HTML by javascript with some method like
  1>document.getElementById
  2>document.getElementsByClassName,
  3>document.getElementByTagName;

  and also special method like query selector and query selector All
  1> document.selectQuery()
  2> document.selectQueryAll()
  ** we can select the Html element by this query selector also id,tagname and class name
*/

 var text=document.getElementById("even");
 console.log(text.innerHTML);  // it will print the p tag text..

 var text=document.getElementsByClassName("evenClass");
 console.log(text[0].innerHTML); //this is return a element in array form with same class name...

 var text=document.getElementsByTagName("p")
 console.log(text[0].innerHTML)  //this is return a element in array form with same tag name...

 // lets check with query selector...

 var text=document.querySelector("#even");
 console.log(text.innerHTML);
 var text=document.querySelector(".evenClass");
 console.log(text.innerHTML)  //don;t return by in array
 var text=document.querySelector("p")
 console.log(text.innerHTML)


 // we can also add this element and create element...by dom..
let newEl=document.createElement("h3");
// add word in this new element 
newEl.innerText="Ok We can learn Javascript basic Dom..";

text.after(newEl)  // we can also add the element with the old element...

// now create a element and put it in the list

 let oldList=document.querySelector("li");  //find the old element by the id 
 let newElement=document.createElement("li"); // create new element
 newElement.innerHTML="Sangita Sarkar"  //set the new element word
 //oldList.append(newElement);      // put is the old list
 document.querySelector("ul").insertBefore(newElement,oldList).nextElement;






  