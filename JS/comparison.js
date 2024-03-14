// document.write(`Rs 400${100!=1000}`)

let a=100
let b='100'

document.write(`${a===b}`)


document.getElementById("submit").addEventListener("click",()=>{
   let res= document.getElementById("n1").value
   let pro=document.getElementById("n3").value
   let price=4000
   let product="samsung"
   if(!(res>price && pro==product)){
    document.getElementById("h").innerHTML="Offer available";
   }
   else{
    document.getElementById("h").innerHTML="offer not available";
   }
})

document.getElementById('cal').addEventListener("click",()=>{
    let check=document.getElementById("vote").value
    let nation=document.getElementById("nation").value
    let state=document.getElementById("state").value
    if(check>18 && nation==="india" && state==="tamilnadu"){
        document.getElementById("hh").innerHTML="You are eligible for voting"
    }
    else{
        document.getElementById("hh").innerHTML="You are not eligible for voting"
    }
})

document.getElementById("offer").addEventListener("click",()=>{
    let val =document.getElementById("in1").value
let sale=document.getElementById("main").value
if(val>4000 && sale=="samsung"){
    document.getElementById("hh").innerHTML="Rs 200 discount"
}
else if(val>40000 && sale=="apple"){
    document.getElementById("hh").innerHTML="RS 500 DISCOUNT"
}
else if(val>100000 && sale=='lg'){
    document.getElementById("hh").innerHTML="Rs 1000 Discount"
} 
else{
    document.getElementById("hh").innerHTML="redmi"
}
})