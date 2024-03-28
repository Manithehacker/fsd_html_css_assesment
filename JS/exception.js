// const test=30
// test=20
// console.log(test)
// try {
//     document.write(a)
//   } catch (e) {
//     document.write(`name:${e.name}<br>`)
//    document.write(`message:${e.message}`)

//   }

document.getElementById("sub").addEventListener("click", (ev) => {
  ev.preventDefault();
  // console.log("test")
  let a = document.getElementById("in");
  let n=Number(a.value)
   try {
    if (n == "" || n == null || !Number.isInteger(n)) {
      throw new Error("invalid data");
    } else {
      document.write("done");
    }
  } catch (e) {
    document.write(e.name);
  }
});
// let t=false;
// if(!t){
//     console.log("true")
// }
// else{
//     console.log("false")
// }
