document.getElementById("btn").addEventListener("click", () => {
  test();
});

function test() {
  let arr = [];
  let a = document.getElementById("h");
  let b = document.getElementById("p1");

  arr.push(a, b);
  for (let i = 0; i < arr.length; i++) {
    document.getElementById("tes").removeChild(arr[i]);
  }
}

document.getElementById("btn").addEventListener("click", test);

function test() {
  let arr = [];
  let a = document.getElementById("h");
  let b = document.getElementById("p1");

  arr.push(a, b);
  for (let i = 0; i < arr.length; i++) {
    document.getElementById("tes").removeChild(arr[i]);
  }
}
