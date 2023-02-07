//document.getElementById("count-pe").innerText = 5;

let saveEl = document.getElementById("save-el");
let countPE = document.getElementById("count-pe");

//console.log(countPE);

let count = 0;

function increment() {
  count += 1;
  countPE.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countPE.textContent = 0;
  count = 0;
}
