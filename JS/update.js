import {arr} from "./arrayofobject.js";

  document.getElementById("update").addEventListener("click",()=>{
    let upd=arr.findIndex((x)=>{
        return x.studid==4
    })
    console.log(upd)
    arr[upd].image='https://tse3.mm.bing.net/th?id=OIP.UfuouxF-RPlE3tBfb16v8gHaC9&pid=Api&P=0&h=180'
    let info=arr.map(ele=>{
      return ` <br>stduID:${ele.studid}<br> studName:${arr[1].studName} <br>studMobile:${ele.mobileNo} <br>studenImg:<img src="${ele.image}"> <br>dob:${ele.studDob} <br>age:${ele.studAge}<br> class:${ele.class} <br>hobbies:${arr[1].hobbies} address:${arr[0].address.no}  <hr>`;
    }).join(" ")
    document.getElementById("he").innerHTML=`${info}`
})



// update more than one value


document.getElementById("moreupdate").addEventListener("click",()=>{
  let val=arr.map((ele)=>{
    ele.class=='bca'?ele.class='agalya is betrayal':console.log("false")
    return ` ${ele.class}`
  })
  document.getElementById("he").innerHTML=`${val}`
})