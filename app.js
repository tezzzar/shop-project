let heartClick = document.querySelectorAll(".prod-pic3");

heartClick.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
  });
});

let cardBtn = document.querySelectorAll(".more-details");

let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

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

let dotsFix = document.querySelectorAll("button[role='tab']");
dotsFix.forEach((item) => {
  item.classList.add("slider-button-fix");
});

let slickDotsFix = document.querySelector(".slick-dots");
slickDotsFix.classList.add("slick-dots-fix");

// show Modal by Scroll ----------------------------------

// function showModalByScroll() {
//   if (window.pageYOffset > document.body.scrollHeight / 2) {
//     openModal();
//     window.removeEventListener("scroll", showModalByScroll);
//   }
// }

// window.addEventListener("scroll", showModalByScroll);

// AOS.init();

// -----------------------------------------------------------

// let incrementBtns = document.querySelectorAll(".increment");
// let decrementBtns = document.querySelectorAll(".decrement");
// let productsQuantity = document.querySelectorAll(".product-quantity input");

// function Counter(
//   incrementButton,
//   decrementButton,
//   inputField,
//   minCount = 1,
//   maxCount = 5
// ) {
//   this.domRefs = {
//     incrementButton,
//     decrementButton,
//     inputField,
//   };
//   this.toggleButtonState = function () {
//     let count = this.domRefs.inputField.value;
//     this.domRefs.decrementButton.disabled = count <= minCount;
//     this.domRefs.incrementButton.disabled = count >= maxCount;
//   };

//   this.toggleButtonState();

//   this.increment = function () {
//     this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
//     this.toggleButtonState();
//   };

//   this.decrement = function () {
//     this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
//     this.toggleButtonState();
//   };

//   this.domRefs.incrementButton.addEventListener(
//     "click",
//     this.increment.bind(this)
//   );
//   this.domRefs.decrementButton.addEventListener(
//     "click",
//     this.decrement.bind(this)
//   );
// }

// window.addEventListener("click", function (e) {
//   console.log(e.target);
//   e.target.closest(".product-quantity");
// });

// let counter1 = new Counter(
//   incrementBtns[0],
//   decrementBtns[0],
//   productsQuantity[0]
// );

// console.log(counter1);

// ________________________________________________________________________________

const counter = function () {
  const btns = document.querySelectorAll(".counter__btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", function (minCount = 1, maxCount = 5) {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector(".counter__value");
      const plusButton = this.parentElement.querySelector(
        "button[data-direction='plus']"
      );
      const minusButton = this.parentElement.querySelector(
        "button[data-direction='minus']"
      );
      const currentValue = +inp.value;
      let newValue;

      if (direction === "plus") {
        newValue = currentValue + 1 < 5 ? currentValue + 1 : 5;
      } else {
        newValue = currentValue - 1 > 1 ? currentValue - 1 : 1;
      }

      inp.value = newValue;

      if (newValue >= maxCount) {
        plusButton.disabled = true;
      } else {
        plusButton.disabled = false;
      }

      if (newValue === 1) {
        minusButton.disabled = true;
      } else {
        minusButton.disabled = false;
      }
    });
  });
};

counter();
