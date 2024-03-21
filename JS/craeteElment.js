let a=document.createElement("h2")
let b=document.createTextNode("Welcome to the wolrd .This is the  betrayal wolrd owned by agalya")

a.appendChild(b)
document.body.appendChild(a)

let x=document.createElement('p')
let y=document.createTextNode("this is the sample paragraph")
x.appendChild(y)
document.body.appendChild(x)

//form creation using js

let k=document.createElement("form")
k.setAttribute('method','post')
k.setAttribute('action','#')
let i=document.createElement('input')
i.setAttribute('placeholder','username')
i.setAttribute('type','text')
let i1=document.createElement('input')
i1.setAttribute('placeholder','password')
i1.setAttribute('type','password')
k.appendChild(i)
k.appendChild(i1)
document.getElementById("div").appendChild(k)