// let small = document.querySelector("#small");
// let medium = document.querySelector("#medium");
// let large = document.querySelector("#large");
// const addCart = document.querySelector("#addCart");

const cartlist = document.querySelector(".cartlist");
let cart = document.querySelector("#cart");

cart.addEventListener("click", () => {
  if (cartlist.style.display === "") {
    cartlist.style.display = "block";
    cart.style.background = "white";
  } else {
    cartlist.style.display = "";
    cart.style.background = "";
  }
});
