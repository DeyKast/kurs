const form = document.getElementById("form");
form.addEventListener("submit", getFormValue);
function getFormValue(event) {
  event.preventDefault();
  let B1 = document.getElementById("B1").value;
  let B2 = document.getElementById("B2").value;
  let C1 = document.getElementById("C1").value;
  let C2 = document.getElementById("C2").value;
  let x = 0;

  x = ((B1 * C1 + B2 * C2) / (B1 + B2)) * C2;

  console.log(B1);
  console.log(B2);
  console.log(C1);
  console.log(C2);
  console.log(x);

  document.getElementById("ans").innerHTML = x.toFixed(3);

  // alert(`Answer = ${x.toFixed(3)}`);
}
