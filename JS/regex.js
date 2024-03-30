let test="MANI krishnaveni"

let reg=/mani/i

if(test.match(reg)){
    console.log(true)
}
else{
    console.log(false)
}

document.getElementById("check").addEventListener("click",(ew)=>{
ew.preventDefault()
    let a=document.getElementById("inp").value;
    let reg=/^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i//name mathcing regex
    let url=/(https:\/\/www\.|http:\/\/www\.|www.\.)?[\w\d+]+\.[\w]/i//gmail regex
    // let password=/[\w]/

    try{
        if(url.test(a)) document.write(`matched the regex pattern=${a}`)
        else throw new Error("pls pujt a input")
    }
    catch(e){
        document.write(e)
    }
    
})

// let url=/^[(\w)+]+:\/\/(\w+)+\.(\w)+\.[\w]+$/i
