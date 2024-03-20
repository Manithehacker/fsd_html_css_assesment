document.getElementById("submit").addEventListener("click",()=>{
    let val = document.getElementById("input").value;
    let dept=document.getElementById("fsel").value;
    if(val>=4 && val<=6){
        if(dept=="cs"){
            document.getElementById("final").innerHTML="6000 increment"
        }
        else{
            document.getElementById("final").innerHTML="6000 increment is not available for your department"
        }
    }
    else if(val>=7 && val<=8){
        if(dept=="bca"){
            document.getElementById("final").innerHTML="8000 increment"
        }
        else{
            document.getElementById("final").innerHTML="8000 increment is  not available ofr  your deparrtemtn"
        }
        
    }
    else if(val>=10){
        document.getElementById("final").innerHTML="12000 increment"
    }
    else{
        document.getElementById("final").innerHTML="no increment"
    }
})