// rows=5;
// for(let i=0;i<rows;i++){

//     for(j=0;j<i;j--){
//         console.log(" ")
//     }
//     for(j=rows;j>i;j++){
//         console.log(
//             " * "
//         )
//     }
// }

// rows=5

// for(var i=1;i<=rows;i++){
//     for(var j=1;j<=i;j++)
// {
//     document.write("* ")
// }
// document.write('<br>')
// for(j=rows)
// }

// let n = 5;
// let string = " ";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string)

let n=5
let string= " "
for(let i=0;i<n;i++){
    for(let j=n-i;j>1;j--){
        // console.log(" ")
        document.write(" ")
    }
    for(let k=0;k<=i;k++){
        // console.log("*")
        document.write("*")
    }

}


for(let i=1;i<=n;i++){
    for(let j=1;j<i;j++){
        console.log(" ")
    }
    for(let k=i;k<=n;k++){
        console.log("*")
    }
}