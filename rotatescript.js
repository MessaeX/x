/*This code is for rotating of FAQ section*/
function rotate(id) {
  let i=0;
let button = document.getElementById(id);
if (button.style.transform === "rotate(0deg)") {

  button.style.transform = "rotate(45deg)";
} else if (button.style.transform = "rotate(45deg)") {

  button.style.transform = "rotate(0deg)";
}
}
