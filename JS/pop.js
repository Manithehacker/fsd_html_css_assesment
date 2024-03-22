import {arr} from "./arrayofobject.js";
// let ins=  {
//     studid: 10,
//     studName: "push",
//     studAge: 22,
//     studDob: "06/11/2001",
//     mobileNo: "12345678",
//     image: "https://tse1.mm.bing.net/th?id=OIP.cJIwhkiBzNLN346CWdq6qAHaEK&pid=Api&P=0&h=180",
//     class: "bca",
//     hobbies:["playing","swimming"],
//     address:
//     {
//         no:1333,
//         street:"nort street"
//     }
//   }
  
  document.getElementById("pop").addEventListener("click",()=>{
    arr.pop()
    let info=arr.map(ele=>{
      return ` <br><hr>stduID:${ele.studid}<br> <hr>studName:${arr[1].studName}<hr> <br>studMobile:${ele.mobileNo} <hr><br>studenImg:<img src="${ele.image}"> <hr><br>dob:${ele.studDob} <br>age:${ele.studAge}<br> class:${ele.class} <br>hobbies:${arr[1].hobbies} address:${arr[0].address.no}  `;
    }).join(" ")
    document.getElementById("he").innerHTML=`${info}`
  })