let plus1 = document.getElementById("+");
let minus1 = document.getElementById("-");


function increment() {
  return ++document.getElementById("counter").innerText;
}


function decrement() {
  let number = finalNumber.innerHTML;
  number--;
  finalNumber.innerHTML = number;
}

plus1.addEventListener("click", increment)
