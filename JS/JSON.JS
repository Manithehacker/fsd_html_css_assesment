//json
let a ={
    name:"mani",
    id:3,
    age:22
}
//js object into json format converts
let b=JSON.stringify(a)
document.write(b)
document.write(`<br>`)

//json into js object

// let js=`{"name":"mani","age":22,"id":4}`
let test=JSON.parse(b)
console.log(test)
document.write(test.age,test.name,test.id)

//arry into js
let arr=`["name",22,5]`
let ar=JSON.parse(arr)
console.log(ar)