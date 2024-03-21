import { arr } from "./arrayofobject.js";
console.log("server test")
//map function
 document.getElementById("text").addEventListener("click", () => {

  let test = arr.map((ele) => {
    return ` stduID:${ele.studid}<br> studName:${arr[1].studName} <br>studMobile:${ele.mobileNo} <br>studenImg:<img src="${ele.image}"> <br>dob:${ele.studDob} <br>age:${ele.studAge}<br> class:${ele.class} <br>hobbies:${ele.hobbies} address:${arr[0].address.no}  `;
  });

  document.getElementById("he").innerHTML = `${test}`;
 });


//filter function
document.getElementById("degre").addEventListener("click", () => {

  let filters = arr.filter((ele) => {
    return ele.class=='bca'
  });
  let info=filters.map(function(ele){
    return `<hr> stduID:z${ele.studid}<br> <hr>studName:${ele.studName} <br>studMobile:${ele.mobileNo} <br>studenImg:<img src="${ele.image}"> <br>dob:${ele.studDob} <br>age:${ele.studAge}<br> class:${ele.class} <br>hobbies:${ele.hobbies} address:${ele.address.no}<hr>  `;
    
  },
  
  )
  // console.log(filters)
  document.getElementById("he").innerHTML = `${info}`;
 });



 //push opertaion

 