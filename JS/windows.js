//btoa base 64 decode

const encodedData = btoa("Hello, world"); // encode a string
console.log("encoded data=" + encodedData);
const decodedData = atob(encodedData); // decode the string
console.log("decoded data=" + decodedData);

//localstorage object

//setItem
localStorage.setItem("name", "veni");
localStorage.setItem("id",2)

//getItem
console.log(localStorage.getItem("name"));

//removeItem
// localStorage.removeItem("name");

//clear all local storage
// localStorage.clear();

//location object
document.querySelector(".test").addEventListener("click", () => {
  //location assign method
  //  console.log(window.location.assign("../HTML_ASSESMENT/index.html"))
  //location reolace method(it is an remove and replace a new document)
 
  console.log(window.location.replace("../HTML_ASSESMENT/index.html"));
  console.log(location.pathname);
  console.log(location.hostname)
});

//session storage
//setItem
const se = sessionStorage.setItem("name", "venimani");
sessionStorage.setItem("age",22)
//getItem
console.log(sessionStorage.getItem("name"));
//getkey
console.log(sessionStorage.key(0));


// Get the text field that we're going to track
let txt = document.getElementById("field");

// See if we have an autosave value
// (this will only happen if the page is accidentally refreshed)
if (sessionStorage.getItem("auto")) {
  // Restore the contents of the text field
 console.log(sessionStorage.getItem("auto"));

}

// Listen for changes in the text field
field.addEventListener("change", () => {
  // And save the results into the session storage object
  console.log(sessionStorage.setItem("auto", txt.value));

});


//storing multiple valuess in local storage 
let t={productName:"apple",model:"apple13",productid:1,ram:["12gb","4gb"]}
let s=JSON.stringify(t)
localStorage.setItem("product",s)
// console.log(localStorage)       
let tes=JSON.parse(localStorage.getItem("product"))
// console.log(JSON.parse(localStorage.getItem("product")))
// let test=JSON.parse(localStorage.getItem("product"))
console.log(tes.productName)
