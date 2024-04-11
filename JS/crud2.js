//create,read ,update,delete(crud)operations


let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let msg1 = document.getElementById("msg1");
let msg2 = document.getElementById("msg2")
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    formvalidation()

})
let formvalidation=()=>{
    if(textInput.value=="" && dateInput.value=="" && textarea.value==""){
        console.log("fail")
        msg.innerHTML="enter the text"
        msg1.innerHTML="please select date"
        msg2.innerHTML="please ebnter the description"

    }
    else{
        console.log("success")
        msg.innerHTML=""
        acceptdata()
        add.setAttribute("data-bs-dismiss","modal")
        add.click(()=>{   // iife
            add.setAttribute("data-bs-dismiss","")  
        })
    
    }
    
}
let data=[];
let acceptdata=()=>{
    data.push({
        text:textInput.value,
        date:dateInput.value,
        area:textarea.value,
        
    })
    localStorage.setItem("data",JSON.stringify(data));
    console.log(data)
    createTask();
    }
    

let createTask=()=>{
    tasks.innerHTML=""
    // let data=localStorage.getItem("name")
    // let tr=JSON.parse(data)
    data.map((x,y)=>{
    //  tasks.innerHTML+=tr.map((x,y)=>{
      return (tasks.innerHTML += ` <div id=${y}>
      <span class="fw-bold">${x.text}</span>
      <span class="small text-secondary">${x.date}</span>
      <p>${x.area}</p>
    
      <span class="options">
        <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
        <i onClick ="deleteTask(this);createTask()" class="fas fa-trash-alt"></i>
      </span>
    </div> `)
     })
    }
    

let deleteTask=(e)=>{
    console.log(e.parentElement.parentElement.remove())
    data.splice(e.parentElement.parentElement.id,1);
    localStorage.setItem("data",JSON.stringify(data))
    console.log(data)
}    
let editTask=(e)=>{
   let a= e.parentElement.parentElement
   console.log(a)
    textInput.value=a.children[0].innerHTML
    dateInput.value=a.children[1].innerHTML
    textarea.value=a.children[2].innerHTML
    // deleteTask(e);
    console.log(a)
}
