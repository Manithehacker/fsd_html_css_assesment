document.getElementById("btn").addEventListener("click", () => {
  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    try {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("test").innerHTML = "test";
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  http.open("GET", "../html/widow.html", true);
  http.send();
});
