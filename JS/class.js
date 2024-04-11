// let destiny={
//     from:"chennai",
//     to:"Munnar",
//     distance:600,
//     milege:35,
//     biek:"Dio" ,
//     average:100,
//     tank:10,
//     days:5
// };

// let budget={
//     totalBudget:5000,
//     food:3500,
//     remaining:1500
// }


// // Function to compare two objects for equality
// function areObjectsEqual(obj1, obj2) {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);
//     // console.log(keys1.length)
//     if (keys1.length !== keys2.length) {
//         return false;
//     }

//     for (let key of keys1) {
//         // console.log(key)
//         console.log(obj1[key])
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }

//     return true;
// }

// // Creating two objects for comparison
// let car1 = { make: "Toyota", model: "Corolla", year: 2021 };
// let car2 = { make: "Toyota", model: "Corolla", year: 2021 };

// // Comparing the two objects
// console.log("Are car1 and car2 equal?", areObjectsEqual(car1, car2));

class Person {
  
    constructor(name, age) {
        this.testName = name;
        this.testAge = age;
        console.log("constructor calling")
    }
    
}
let obj1=new Person("mani",22)

console.log(obj1)