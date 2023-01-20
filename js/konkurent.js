const form = document.getElementById("form");
form.addEventListener("submit", getFormValue);
function getFormValue(event) {
  event.preventDefault();
  let In = document.getElementById("In").value;
  let It = document.getElementById("It").value;
  let Ie = document.getElementById("Ie").value;
  let x = 0;

  x = (In * It) / Ie;

  console.log(In);
  console.log(It);
  console.log(Ie);
  console.log(x);

  document.getElementById("ans").innerHTML = x.toFixed(3);

  // alert(`Answer = ${x.toFixed(3)}`);
}
