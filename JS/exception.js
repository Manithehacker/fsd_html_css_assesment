// const test=30
// test=20
// console.log(test)
// try {
//     document.write(a)
//   } catch (e) {
//     document.write(`name:${e.name}<br>`)
//    document.write(`message:${e.message}`)

//   }


//try catch
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
    document.write(e.message);
  }finally{
    document.write("its done")
  }
});


//through error
// let x=parseInt(prompt("input a number less than 5")) 
// try{ 
// y=x-10 
//  if(y>=5)
//   throw{
//   name:"Reference error",
//   message:"Y is not less than 5"
//  }
//   //throw new Error(" y is not less than 5") 
// else alert(y) 
// }catch(e){ 
// alert(e.name+":"+e.message)

//  
// }


//rethrow error

// let x1=parseInt(prompt("input a number less than 5")) 
// try{ 
// y=x1-10 
// console.log(y)
// if(y>=5) throw new Error(" y is not less than 5") 
// else alert(y) 
// }catch(e){ 
//   if(e instanceof ReferenceError){
//     throw e
//   }else{
//     alert(e) 
//   }

// }



 // Assigning the value returned by the prompt dialog box to a variable
 var num = prompt("Enter a positive integer between 0 to 100");
 // Storing the time when execution start
var start = Date.now();
// console.log(start)
  try {
  if(num > 0 && num <= 100) {
      alert(Math.pow(num, num)); // the base to the exponent power
  } else {
      throw new Error("An invalid value is entered!");
  }
} catch(e) {
  alert(e.message);
} finally {
  // Displaying the time taken to execute the code
  // let test=Date.now() 
  // console.log(test)
  // let info=test-start
  // console.log(info)
  alert("Execution took: " + (Date.now() - start) + "ms");
 }




var a = "%E6%A2%B";

try {        
    
  // const uri = 'https://mozilla.org/?x=шеллы';
  const encoded = encodeURI(a);
  console.log(encoded);  
  const decode=decodeURI(encoded)
  console.log(decode)        
} catch(e) {
    document.write(e.name + ": " +  e.message);
}
