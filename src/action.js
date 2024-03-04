let toggleValue = "yearly";
let toogleButton = document.querySelector("body main > div > div > div");
let priceParagraphe = document.querySelectorAll("body main  section .price");
const basic = document.getElementById("basic");
const pro = document.getElementById("pro");
const master = document.getElementById("master");
const cards = document.querySelectorAll("main section > div");
cards.forEach((ele) => {
  ele.addEventListener("click", changeCard);
});
function toggle() {
  if (toggleValue === "monthly") {
    toogleButton.classList.add("monthly");
    toogleButton.classList.remove("yearly");
    priceParagraphe[0].innerHTML = "$19,99";
    priceParagraphe[1].innerHTML = "$24,99";
    priceParagraphe[2].innerHTML = "$39,99";
  } else {
    toogleButton.classList.remove("monthly");
    toogleButton.classList.add("yearly");
    priceParagraphe[0].innerHTML = "$199,9";
    priceParagraphe[1].innerHTML = "$249,9";
    priceParagraphe[2].innerHTML = "$399,9";
  }
}
function changeCard(e) {
  e = e.target;
  console.log(e);
  basic.classList.remove("active");
  pro.classList.remove("active");
  master.classList.remove("active");
  e.classList.add("active");
}
toogleButton.parentElement.addEventListener("click", () => {
  toggleValue = "monthly" === toggleValue ? "yearly" : "monthly";
  toggle();
});
onload = () => {
  toggle();
};
