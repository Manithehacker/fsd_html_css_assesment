document.getElementById("main").addEventListener("click",(e)=>{
    console.log("helo testing")
    // let a =document.getElementById("input").value;
    switch(e.target.getAttribute("id")){
        case "dc":
            document.getElementById('test').style.display='block';
            document.getElementById('test1').style.display='none';
            break;
        case "cc":
           document.getElementById("test1").style.display='block';
           document.getElementById("test").style.display='none';
            break;
        case "upi":
            document.getElementById("test").style.display='none';
            document.getElementById("test1").style.display='none';
            break;
        default:
            console.log("default case")        
    }
})

