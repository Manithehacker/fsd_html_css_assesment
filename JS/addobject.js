import { arr } from "./arrayofobject.js";
//console.log(arr);

// add info

document.getElementById("addinfo").addEventListener("click", () => {
  let a = document.createElement("form");
  a.setAttribute("method", "get");
  a.setAttribute("action", "#");
  a.setAttribute("enctype", "multipart/form");
  a.setAttribute("id", "for");

  let i = document.createElement("input");
  i.setAttribute("placeholder", "Enter student id");
  i.setAttribute("type", "text");
  i.setAttribute("id", "i");

  let i1 = document.createElement("input");
  i1.setAttribute("placeholder", "Name");
  i1.setAttribute("type", "text");
  i1.setAttribute("id", "i1");

  let i2 = document.createElement("input");
  i2.setAttribute("placeholder", "Degree");
  i2.setAttribute("type", "text");
  i2.setAttribute("id", "i2");

  let i3 = document.createElement("input");
  i3.setAttribute("placeholder", "Age");
  i3.setAttribute("type", "text");
  i3.setAttribute("id", "i3");

  let i4 = document.createElement("input");
  i4.setAttribute("placeholder", "enter your date of birth");
  i4.setAttribute("type", "data");
  i4.setAttribute("id", "i4");
  //check  box
  let i5 = document.createElement("input");
  i5.setAttribute("type", "checkbox");
  i5.setAttribute("value", "sports");
  i5.setAttribute("name", "hobbies[]");
  i5.setAttribute("id", "i5");
  let l = document.createElement("label");
  l.setAttribute("for", "i5");
  let lt = document.createTextNode("sports");
  l.appendChild(lt);

  let i6 = document.createElement("input");
  i6.setAttribute("type", "checkbox");
  i6.setAttribute("value", "listening");
  i6.setAttribute("name", "hobbies[]");
  i6.setAttribute("id", "i6");
  let l1 = document.createElement("label");
  l1.setAttribute("for", "i6");
  let lt1 = document.createTextNode("listening");
  l1.appendChild(lt1);

  let i7 = document.createElement("input");
  i7.setAttribute("type", "checkbox");
  i7.setAttribute("value", "dance");
  i7.setAttribute("name", "hobbies[]");
  i7.setAttribute("id", "i7");
  let l2 = document.createElement("label");
  l2.setAttribute("for", "i7");
  let lt2 = document.createTextNode("dance");
  l2.appendChild(lt2);

  let sub = document.createElement("input");
  sub.setAttribute("id", "sub");
  sub.setAttribute("type", "submit");
  sub.addEventListener("click", addItems);

  a.appendChild(i);
  a.appendChild(i1);
  a.appendChild(i2);
  a.appendChild(i3);
  a.appendChild(i4);
  a.appendChild(l);
  a.appendChild(i5);
  a.appendChild(l1);
  a.appendChild(i6);
  a.appendChild(l2);
  a.appendChild(i7);
  a.appendChild(sub);
  document.getElementById("div").appendChild(a);
});

// document.getElementById("sub").addEventListener("click",()=>{
function addItems(e) {
  e.preventDefault();
  console.log("hi");
  let obj = {
    studId: document.getElementById("i").value,
    studName: document.getElementById("i1").value,
    studAge: document.getElementById("i2").value,
    studDob: document.getElementById("i3").value,
    Hobbies: Array.from(document.getElementsByName("hobbies[]"))
      .filter((fil) => {
        return fil.checked;
      })
      .map((ele) => {
        return ele.value;
      }),
  };
  console.log(obj);

  arr.push(obj);
  document.getElementById("he").innerHTML = arr.map((ele) => {
    return ` <br><hr>stduID:${ele.studid}<br> <hr>studName:${arr[1].studName}<hr> <br>studMobile:${ele.mobileNo} <hr><br>studenImg:<img src="${ele.image}"> <hr><br>dob:${ele.studDob} <br>age:${ele.studAge}<br> class:${ele.class} <br>hobbies:${arr[1].hobbies} address:${arr[0].address.no}  `;

  });
}
// import { arr } from "./arrayofobject.js";
// console.log(arr);
