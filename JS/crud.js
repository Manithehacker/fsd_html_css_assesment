//create,read ,update,delete(crud)operations

//getting html element id's
let form = document.getElementById("form");
let tasknumber = document.getElementById("num");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msgnum = document.getElementById("msgnum");
let msg = document.getElementById("msg");
let msg2 = document.getElementById("msg2");
let msg3 = document.getElementById("msg3");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
let key = document.getElementById("key");
let show = document.getElementById("dis");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

//form validation
const formValidation = () => {
  try {
    if (
      tasknumber == "" &&
      textInput.value == "" &&
      dateInput.value == "" &&
      textarea.value == ""
    ) {
      msgnum.innerHTML = "please enter task number";
      msg.innerHTML = "please enter the title";
      msg2.innerHTML = "please select date";
      msg3.innerHTML = "please enter the message";
    } else {
      msg.innerHTML = "";
      msg2.innerHTML = "";
      msg3.innerHTML = "";
      acceptData();
      add.setAttribute("data-bs-dismiss", "modal");
      add.click(() => {
        add.setAttribute("data-bs-dismiss", "");
      });
    }
  } catch (e) {
    document.write(e);
  }
};

//initializing empty array to store the values
let data = [];

//accept data
let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });
  //set data to localStoarge
  localStorage.setItem(tasknumber.value, JSON.stringify(data));
};

// let getData = () => {
//   let info= localStorage.getItem("test");
//   let test=JSON.parse(info)
//   test.map((ele)=>{
//  return`${document.getElementById("title").innerHTML=ele.text}${document.getElementById("date").innerHTML=ele.date}${document.getElementById("area").innerHTML=ele.description}`
//   })
//  }

//get data
let getData = () => {
  //once th function run then form diplay none
  show.classList.add("mystyle");
  tasks.innerHTML = "";
  //getin datad from local storage
  let data = localStorage.getItem(key.value);
  if (data) {
    //parse json inot object
    let tr = JSON.parse(data);
    //maping the data
    tasks.innerHTML += tr.map((x, y) => {
      return ` <div id=${y}>
  <span class="fw-bold">${x.text}</span>
  <span class="small text-secondary">${x.date}</span>
  <p>${x.description}</p>

  <span class="options">
    <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
    <i onClick ="deleteTask(this);" class="fas fa-trash-alt"></i>
  </span>
 </div`;
    });
  } else {
    alert("please enter the correct key");
  }
};

//edit task

let editTask = () => {
  let arr = [];
  add.onclick(() => {
    //splicing data into array
    arr.splice(
      {
        text: textInput.value,
        date: dateInput.value,
        description: textarea.value,
      },
      key
    );
  });
};

//delete task
let deleteTask = () => {
  //getting deleting key from prompt
  let t = prompt("Enter the id do u want delete");

  if (localStorage.removeItem(t)) {
    window.location.replace("../HTML_ASSESMENT/index.html");
    //alert("deleted successfully");
  } else {
    console.error("error");
  }
};
