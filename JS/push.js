//insert data in last of an  array
import {arr} from "./arrayofobject.js";
let ins=  {
    studid: 10,
    studName: "push",
    studAge: 22,
    studDob: "06/11/2001",
    mobileNo: "12345678",
    image: "https://tse1.mm.bing.net/th?id=OIP.cJIwhkiBzNLN346CWdq6qAHaEK&pid=Api&P=0&h=180",
    class: "bca",
    hobbies:["playing","swimming"],
    address:
    {
        no:1333,
        street:"nort street"
    }
  }
  
  document.getElementById("push").addEventListener("click",()=>{
    arr.push(ins)
    let info=arr.map(ele=>{
      return `<hr> <br>stduID:${ele.studid}<br> studName:${arr[1].studName} <br>studMobile:${ele.mobileNo}<br>studenImg:<img src="${ele.image}"> <br>dob:${ele.studDob} <br>age:${ele.studAge}<br> class:${ele.class} <br>hobbies:${arr[1].hobbies} address:${arr[0].address.no}  `;
    }).join(" ")
    document.getElementById("he").innerHTML=`${info}`
  })