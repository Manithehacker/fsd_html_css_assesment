document.querySelectorAll("button").forEach((e) => {
  e.addEventListener("click", (e) => {
    switch (e.target.getAttribute("id")) {
      case "addItem":
        document.getElementById("addItem").addEventListener("click", () => {
          let a = document.createElement("form");
          let inp1 = document.createElement("input");
          inp1.setAttribute("id", "inp1");
          inp1.setAttribute("placeholder", "enter the product name");
          let inp2 = document.createElement("input");
          inp2.setAttribute("id", "inp2");
          inp2.setAttribute("placeholder", "enter the product id");
          let inp3 = document.createElement("input");
          inp3.setAttribute("id", "inp3");
          inp3.setAttribute("placeholder", "enter the product model ");

          let inp4 = document.createElement("input");
          inp4.setAttribute("id", "inp4");
          inp4.setAttribute("placeholder", "enter the product NO");
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
            // EVE.preventDefault()
            let inp1 = document.getElementById("inp1").value;
            let inp2 = document.getElementById("inp2").value;
            let inp3 = document.getElementById("inp3").value;
            let prouctNo = document.getElementById("inp4").value;
            // localStorage.setItem("productName", inp1);
            // localStorage.setItem("productID", inp2);
            // localStorage.setItem("productmodel", inp3);
            //
            try {
              let obj = { name: inp1, id: inp2, model: inp3 };

              localStorage.setItem(prouctNo, JSON.stringify(obj));
            } catch (e) {
              document.write(e);
            }
          });
        });
      case "getItem":
        document.getElementById("getItem").addEventListener("click", () => {
          let a = document.createElement("form");
          let inp1 = document.createElement("input");
          inp1.setAttribute("id", "inp1");

          let sub = document.createElement("input");
          sub.setAttribute("type", "submit");
          sub.setAttribute("id", "submit");
          a.appendChild(inp1);

          a.appendChild(sub);
          document.body.appendChild(a);

          document
            .getElementById("submit")
            .addEventListener("click", (event) => {
              event.preventDefault();
              let inp1 = document.getElementById("inp1").value;

              //getting data from local storage
              let info = localStorage.getItem(inp1);

              //  get the values  from local storage storing to json format
              let arr = `[${info}]`;
              console.log(arr);
              //convert json into  array
              let test = JSON.parse(arr);
              //maping the data
              let display = test.map((ele) => {
                return `name:${ele.name} <br>id:${ele.id}<br>model:${ele.model}`;
              });
              document.write(display);
            });
        });
      case "remove":
        document.getElementById("remove").addEventListener("click", () => {
          let form = document.createElement("form");
          let inp = document.createElement("input");
          inp.setAttribute("id", "inp1");
          let sub = document.createElement("input");
          sub.setAttribute("id", "submit");
          sub.setAttribute("type", "submit");
          form.appendChild(inp);
          form.appendChild(sub);
          document.body.appendChild(form);

          document.getElementById("submit").addEventListener("click", () => {
            let inp1 = document.getElementById("inp1").value;
            try {
              localStorage.removeItem(inp1);
            } catch (e) {
              document.write(e);
            }
          });
        });
      case "clear":
        document.getElementById("clear").addEventListener("click",()=>{
          try {
            localStorage.clear();
            document.write("cleared successfully");
          } catch (e) {
            document.write(e);
          }
        })
      case "key":
        document.getElementById("key").addEventListener("click",()=>{
          let form =document.createElement("form")
          let inp1=document.createElement("input")
          inp1.setAttribute("id","inp1")
          let inp2=document.createElement("input")
          inp2.setAttribute("id","inp2")
          inp2.setAttribute("type","submit")
          form.appendChild(inp1)
          form.appendChild(inp2)
          document.body.appendChild(form)

          document.getElementById("submit").addEventListener("click",()=>{
            try{
              document.write(localStorage.key(inp1))
              console.log(localStorage.key(inp1))
            }catch(e){
              document.write(e)
            }
          })
         
        }) 
    }
  });
});
