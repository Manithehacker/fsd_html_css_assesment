//sort opertaion

import {arr} from "./arrayofobject.js";

document.getElementById("sort").addEventListener("click",()=>{
    let sort=arr.sort((a,b)=>{
        return (a.studName>b.studName)?0:1
    })
    console.log(sort)
    document.getElementById("he").innerHTML=sort.map((ele)=>{
        return `<hr> <br>stduID:${ele.studid}<br> studName:${ele.studName} <br>studMobile:${ele.mobileNo}<br>studenImg:<img src="${ele.image}"> <br>dob:${ele.studDob} <br>age:${ele.studAge}<br> class:${ele.class} <br>hobbies:${arr[1].hobbies} address:${arr[0].address.no}  `;

    })
})