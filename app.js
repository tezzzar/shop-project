let heartClick = document.querySelectorAll(".prod-pic3");
// let style = getComputedStyle(heartClick[i]);
// var cl = heartClick[i];
// console.log(heartClick);

heartClick.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
  });
});

let cardBtn = document.querySelectorAll(".more-details");

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

$(".slider").slick({
  dots: true,
});

// console.log(slick);

// $(".slick-theme").slick({
//   arrows: true,
//   prevArrow: ".slickArrowFixPrev",
//   nextArrow: ".slickArrowFixNext",
// });

let dotsFix = document.querySelectorAll("button[role='tab']");
dotsFix.forEach((item) => {
  item.classList.add("slider-button-fix");
});
// console.log(dotsFix);

let slickDotsFix = document.querySelector(".slick-dots");
slickDotsFix.classList.add("slick-dots-fix");
// console.log(slickDotsFix);

// let slickArrowFix = document.querySelectorAll(".slick-arrow");
// slickArrowFix.forEach((item) => {
//   item.classList.add("arrowFix");
// });

// let slickArrowFixPrev = document.querySelector(".slick-prev", "before");
// // slickArrowFixPrev.classList.add("arrowFixPrevImg");

// let slickArrowFixNext = document.querySelector(".slick-next");
// // slickArrowFixNext.classList.add("arrowFixNextImg");

// console.log(slickArrowFixPrev);
// console.log(slickArrowFixNext);

// $(document).ready(function () {
//   $(".single-item").slick({
//     arrows: true,
//   });
// });

// prevArrow: '.класс для стрелки перехода на предыдущий слайд',
// nextArrow: '.класс для стрелки перехода на следующий слайд'
