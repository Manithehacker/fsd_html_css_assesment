let k=document.createElement("div")
k.setAttribute("id","show")
document.body.appendChild(k)
const data=[
    {
    name:"mani",
    id:90,
    age:22
},{
    name:"veni",
    id:89,
    age:22
}
]
//filter
let filter=data.filter((ele)=>{
    return ele.name=="veni"
})
//map

let test=data.map((ele)=>{
    return `NAME:${ele.name} <br>ID:${ele.id}<br>AGE:${ele.age}`
})

//push
let da={
name:"venichlm",
id:79,
age:21
}
data.push(da)
let test1=data.map((ele)=>{
    return `NAME:${ele.name} <br>ID:${ele.id}<br>AGE:${ele.age}`
})



//unshift
data.unshift(da)
let test2=data.map((ele)=>{
    return `NAME:${ele.name} <br>ID:${ele.id}<br>AGE:${ele.age}`
})

//splice
data.splice(1,0,da)

let test3=data.map((ele)=>{
    return `NAME:${ele.name} <br>ID:${ele.id}<br>AGE:${ele.age}`
})
document.getElementById("show").innerHTML=test3

//pop
data.pop()
let test4=data.map((ele)=>{
    return `NAME:${ele.name} <br>ID:${ele.id}<br>AGE:${ele.age}`
})

document.getElementById("show").innerHTML=test4


//shift

data.shift()
let test5=data.map(ele=>{
    return `NAME:${ele.name} <br>ID:${ele.id}<br>AGE:${ele.age}`

})
document.getElementById("show").innerHTML=test5


//delete

delete data[1]
document.getElementById("show").innerHTML=data.map(ele=>{
    return `NAME:${ele.name} <br>ID:${ele.id}<br>AGE:${ele.age}`

})

//update

let id=data.findIndex(x=>{
    return x.age==21  
})
// console.log(id)
data[id].name="changed"
document.getElementById("show").innerHTML=data.map(ele=>{
    return `NAME:${ele.name} <br>ID:${ele.id}<br>AGE:${ele.age}`

})
