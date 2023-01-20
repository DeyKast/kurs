const form = document.getElementById("form");
form.addEventListener("submit", getFormValue);
function getFormValue(event) {
  event.preventDefault();
  let Ceb = document.getElementById("Ceb").value;
  let Cb = document.getElementById("Cb").value;
  let Bb = document.getElementById("Bb").value;
  let Cen = document.getElementById("Cen").value;
  let Cn = document.getElementById("Cn").value;
  let Bn = document.getElementById("Bn").value;
  let x = 0;

  x = (Cen - Cn) * Bn - (Ceb - Cb) * Bb;

  console.log(Ceb);
  console.log(Cb);
  console.log(Bb);
  console.log(Cen);
  console.log(Cn);
  console.log(Bn);
  console.log(x);

  document.getElementById("ans").innerHTML = x.toFixed(3);

  // alert(`Answer = ${x.toFixed(3)}`);
}
