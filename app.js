let heartClick = document.querySelectorAll(".prod-pic3");
// let style = getComputedStyle(heartClick[i]);
// var cl = heartClick[i];
console.log(heartClick);

heartClick.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
  });
});

let cardBtn = document.querySelectorAll(".add-to-card-button");

let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");
// cardBtn.forEach((item) => {
//   item.addEventListener("click", function () {
//     modal.classList.add("show");
//     modal.classList.remove("hide");
//   });
// });

// closeBtn.forEach((item) => {
//   item.addEventListener("click", function () {
//     modal.classList.add("hide");
//     modal.classList.remove("show");
//   });
// });

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

cardBtn.forEach((item) => {
  item.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

$(".slider").slick();
