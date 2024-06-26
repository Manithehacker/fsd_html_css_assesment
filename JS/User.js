//get buttons id  one by one using forEach
document.querySelectorAll("button").forEach((e) => {
  e.addEventListener("click", (e) => {
    //storing buttons id in id variable
    let id = e.target.getAttribute("id");
    switch (id) {
      //addItem case
      case "addItem":
        let a = document.createElement("form");
        a.setAttribute("id","setItem")

        let inp1 = document.createElement("input");
        inp1.setAttribute("id", "inp1");
        inp1.setAttribute("placeholder", "enter the product name");

        let inp2 = document.createElement("input");
        inp2.setAttribute("id", "inp2");
        inp2.setAttribute("placeholder", "enter the product price");

        let inp3 = document.createElement("input");
        inp3.setAttribute("id", "inp3");
        inp3.setAttribute("placeholder", "enter the product model ");

        let inp4 = document.createElement("input");
        inp4.setAttribute("id", "inp4");
        inp4.setAttribute("placeholder", "enter the product type");

        let sub = document.createElement("input");
        sub.setAttribute("type", "submit");
        sub.setAttribute("id", "submit");

        a.appendChild(inp1);
        a.appendChild(inp2);
        a.appendChild(inp3);
        a.appendChild(inp4);
        a.appendChild(sub);
        document.body.appendChild(a);

        document.getElementById("submit").addEventListener("click", () => {
      
          let a = document.getElementById("inp1").value;
          let b = document.getElementById("inp2").value;
          let c = document.getElementById("inp3").value;
          let productName = document.getElementById("inp4").value;

          //
          try {
            let obj = { name: a, id: b, model: c };
            //storing the data ro local storage
            console.log(typeof(obj))
            localStorage.setItem(productName, JSON.stringify(obj));
          } catch (e) {
            document.write(e);
          }
        });
        break;

      //getItem case
      case "getItem":
        let form2 = document.createElement("form");
        form2.setAttribute("id","getItem")
        
        let get = document.createElement("input");
        get.setAttribute("id", "get");

        let sub1 = document.createElement("input");
        sub1.setAttribute("type", "submit");
        sub1.setAttribute("id", "submit1");
        form2.appendChild(get);
        form2.appendChild(sub1);
        document.body.appendChild(form2);

        document
          .getElementById("submit1")
          .addEventListener("click", (event) => {
            event.preventDefault();
            let inp = document.getElementById("get").value;

            try{
              
            //getting data from local storage
            let info = localStorage.getItem(inp);
              console.log(typeof(info))
            //  get the values  from local storage storing to json format
            let arr = `[${info}]`;
            console.log(typeof(arr));
            //convert json into  array
            let convert = JSON.parse(arr);
            console.log(typeof(convert))
            //maping the data
            let display = convert.map((ele) => {
              return `name:${ele.name} <br>id:${ele.id}<br>model:${ele.model}`;
            });
            document.write(display);
            }
            catch(e){
              document.write(e)
            }
          });
        break;
      //remove case
      case "remove":
        let form3 = document.createElement("form");
        form3.setAttribute("id","remove")
        let inp = document.createElement("input");
        inp.setAttribute("id", "inp1");
        let sub2 = document.createElement("input");
        sub2.setAttribute("id", "submit");
        sub2.setAttribute("type", "submit");
        form3.appendChild(inp);
        form3.appendChild(sub2);
        document.body.appendChild(form3);

        document.getElementById("submit").addEventListener("click", () => {
          let inp1 = document.getElementById("inp1").value;
          try {
            //removing data from local storage
            localStorage.removeItem(inp1);
          } catch (e) {
            document.write(e);
          }
        });
        break;
      //clear case
      case "clear":
        try {
          //clear all the data from local storage
          localStorage.clear();
          document.write("cleared successfully");
        } catch (E) {
          document.write(E);
        }
        break;
      //key case
      case "key":
        let form4 = document.createElement("form");
        form4.setAttribute("id","key")
        let inp8 = document.createElement("input");
        inp8.setAttribute("id", "inp8");
        let inp7 = document.createElement("input");
        inp7.setAttribute("id", "inp7");
        inp7.setAttribute("type", "submit");
        inp7.setAttribute("id", "submit5");
        form4.appendChild(inp8);
        form4.appendChild(inp7);
        document.body.appendChild(form4);

        document.getElementById("submit5").addEventListener("click", () => {
          let inp = document.getElementById("inp8").value;
          try {
            document.write(localStorage.key(inp));
          } catch (e) {
            document.write(e);
          }
        });
        break;

      //length case
      case "length":
        try{
          document.write(`Length of the local storage${localStorage.length}`)
        }
        catch(e){
          document.write(e)
        }
    }
  });
});
