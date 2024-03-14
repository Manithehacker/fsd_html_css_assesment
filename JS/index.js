// console.log("This is node js");
// test=confirm("This is extrenal");

// if(test===false){
//     console.log("This is false")
// }
// else{
//     console.log("This is true ")
// }
// let a=(50<100)?"she is betrayal":"false"
// console.log(a)
// function test(number){
//     console.log(number*number)
// }
// let test=20;
// console.log(test);
// test=40;
// console.log(test)
// console.log("test")
let a1=document.getElementById("n1");
let a2=document.getElementById("n2");

// const test=()=>{
//     document.getElementById("h").innerHTML=Number(a1.value)+Number(a2.value);
//     // console.log(res)
// }
// const subractionOperation=()=>{
//     document.getElementById("h").innerHTML=Number(a1.value)-Number(a2.value);
//     // console.log(res)
// }
// const multiplicationOperation=()=>{
//     document.getElementById("h").innerHTML=Number(a1.value)*Number(a2.value);
//     // console.log(res)
// }
// const divisionOperation=()=>{
//     document.getElementById("h").innerHTML=Number(a1.value)/Number(a2.value);
//     // console.log(res)
// }

// event listener
let test=()=>{
    document.getElementById("h").innerHTML=Number(a1.value/a2.value);
 }
document.getElementById("action").addEventListener("click",test)

