// let school = { 
//     name: 'Vivekananda School', 
//     location : 'Delhi', 
//     established : '1971', 
//     20 : 1000, 
//     displayInfo : function(){ 
//           console.log(`The value of the key 20 is ${school['20']}`); 
//      } 
// }

// console.log(typeof(school))

// var person =`
// 	 [ 
// 		{ 
// 			"Name" : "Trees", 
// 			"Course" : "Intoduction of Trees", 
// 			"Content" : [ "Binary Tree", "BST", 
// 					"Generic Tree"] 
// 		}, 
// 		{ 
// 			"Name" : "Graphs", 
// 			"Topics" : [ "BFS", "DFS", "Topological Sort" ] 
// 		} 
// 	] 
// `

// const test=JSON.stringify(person)
// test.nap((ele)=>{
//     console.log(ele.Name)
// })

let obj={
    empId:"1234",name:"mani",age:23,cont:7878787878,display:function(){
        return `${this.empId}${this.name}${this.cont}${this.age}<br>`
    }
}

let obj1={test:
    function(salary,designation){
    document.write(this.display()+salary+designation)
}}

let a=obj1.test.bind(obj)
a(9000,"cs")
document.write(obj1.test.call(obj,8000,"call"))
document.write(obj1.test.apply(obj,[900,"apply"]))



//hoisting 


test()//calling the function before initiallization

function test(){
    document.write("hoisting")
}


//closure method

function init() {
    var name = "KRISHNAVENI"; // name is a local variable created by init function
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // name  variable declared in the parent function
    }
    // name="manikandan"
    displayName();//calling dispklay function in init()
    // name="manikandan"
    // displayName()
  }
  init();//calling init function
  

  var x = 10;

function foo() {
  var y = 20; // free variable
  function bar() {
    var z = 15; // free variable
    return x + y + z;
  }
  return bar();
}

console.log(foo())




//rest operator
function rset(...args){
    // console.log(a)
    // console.log(b)
    // console.log(args[0].name)
    // let sum=0
    // for(i=0;i<args.length;i++){
        
    //     sum=sum+args[i]
        
    // }

    // console.log(sum)

  //  for loop using print values
    for(let i=0;i<args.length;i++){
        console.log(`${args[i].name}${args[i].age}`)
    }

    //map function use to print values
   let info= args.map((ele)=>{
    return  `${ele.name}${ele.age}`
})

}
// rset("mani","veni","papa","maniveni","krihsnaveni")
rset(90,90,34,4,5)

rset({
    name:"mani",
    age:22,

},{
    name:"veni",
    age:22
})

//spread operator

let arr1=[1,3,4]
let arr2=[3,5,7]
let tet=[...arr1,...arr2]//concat the two array
// function sum(...args){
//     console.log(args)
// }

// console.log(tet)

let arrobj=[{
    name:"mani",age:22
},{
    name:"veni",age:21
}
]
let arr4=[...arrobj]
for(let i=0;i<arr4.length;i++){
document.write(`<br>${arr4[i].name} ${arr4[i].age}<br>`)}

let filter=arr4.filter((ele)=>{
    return ele.age==21
})
filter.map((ele)=>{
    document.write(ele.name+ele.age)
})















