const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function (a,b) {
    return`ADD ${a+b}`;
  },
};
for(let i in person){
    console.log(person[i])
}
console.log(person.bio())
console.log(person.introduceSelf(20,30))
console.log(person.name[0],person.name[1])



let obj={
    rollnum:89,
    name:["mani","veni"],
    image:"https://tse3.mm.bing.net/th?id=OIP.NhwNxzXRyn68vTDWlQeAiAHaE6&pid=Api&P=0&h=180"
}

for (let i in obj){
    console.log(obj.name)
}

document.write(`<img src="${obj.image}" alt="test" width="100px; height=100px">`)
console.log("tyest")

let test={
  name:"mani",
  last:"veni"
}

for (let x in test){
  console.log(x)
}