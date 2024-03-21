//search
import { arr } from "./arrayofobject.js";

document.getElementById("search").addEventListener("click", () => {
  let research = arr.filter((ele) => {
    return ele.studAge == 22 && ele.class == "bca" 
  });
  let info = research.map((ele) => {
    return ` <img src="${ele.image}">`;
  });
  document.getElementById("he").innerHTML =`${info}`;
});
