document.getElementById("btn").addEventListener("click", test)
function test() {
  let arr = [];
  let a = document.getElementById("h");
  let b = document.getElementsByClassName("test");


//pushing a vlue in array
  arr.push(a)
  //b value store or push in array  
  for (let i = 0; i <b.length; i++) {
    arr.push(b[i])
  }
  console.log(arr)
  //removing elements one by one
  for (let i = 0; i < arr.length; i++) {
    document.getElementById("tes").removeChild(arr[i]);
  }
  
}

// document.getElementById("btn").addEventListener("click", test);

// function test() {
//   let arr = [];
//   let a = document.getElementById("h");
//   let b = document.getElementById("p1");

//   arr.push(a, b);
//   for (let i = 0; i < arr.length; i++) {
//     document.getElementById("tes").removeChild(arr[i]);
//   }
// }
