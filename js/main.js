const itemList = document.getElementsByClassName("section-plans__list-item");

let mouseover = function() {
  this.querySelector(".btn").classList.add("button-main");
  this.querySelector(".btn").classList.remove("button-secondary");
};
let mouseleave = function() {
  this.querySelector(".btn").classList.add("button-secondary");
  this.querySelector(".btn").classList.remove("button-main");
};

for (let i = 0; i < itemList.length; i++) {
  itemList[i].addEventListener("mouseover", mouseover);
  itemList[i].addEventListener("mouseleave", mouseleave);
}
