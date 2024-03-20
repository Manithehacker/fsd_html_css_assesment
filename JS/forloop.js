//ternary operator
document.getElementById("main").addEventListener("click",()=>{
    let a = document.getElementById("input").value;
    
    (a>=500 ? document.getElementById("final").innerHTML="Offer availble":document.getElementById("input").innerHTML="Offer not available")
})

//while loop
let i=1;//initialization
while(i<=5){//condition
    console.log(`${i}=test`)
    i++;//increment
}
a=1

// console.log(a++)//post pre increment
// console.log(a)

console.log(++a)
console.log(a)


// do while 

do{
    document.write("<br>do while");
    document.write(a)

    a++;  
    // document.write(a)  
}
while(a<5)


//for loop

for(i=0;i<15;i++){
    // document.write("<br>for loop")
    // if(i%2==0){
    //     document.write(`${i}=is even`)
    // }
    // else{
    //     document.write(`${i}=is add`)
    // }
    (i%2==0?document.write(`<br>${i}even`):document.write(`<br>${i}add`))
}



for(i=0;i<5;i++){
    document.write("<br>*")
    for(j=0;j<i;j++){
        document.write("*")
    }
}


