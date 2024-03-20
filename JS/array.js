let name=['mani','agal','vishnu']
let test=name.at(1)
// console.log(test)

for(let i=0;i<name.length;i++){
    console.log(name[i])
}
for(let i=name.length;i>=0;i--){
    console.log(name[i])
}
//for in
for(let i in name){
    console.log(name[i])
}
//for each
name.forEach(element => {
    console.log(element)
});

//for in
for(let i in name){
    console.log(name[i])
}

//for of
for(let j of name){
    console.log(j)
}




let num=[1,2,3,4,5]
const map1=num.map((arr)=>arr*2)
    console.log(map1)

for(let n=0;num.length>n;n++){
    console.log(num[n])
}

let a =[1,2,3,4,5,6,7,8,9]

for (let b=0;a.length>b;b++){
    console.log(a[b])
}
