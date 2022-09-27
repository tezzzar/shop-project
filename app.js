const heartClick = document.querySelector(".prod-pic3");
const style = getComputedStyle(heartClick);
var pic = style.backgroundImage;

// console.log(pic);

// var picChange = function () {
//   heartClick.style.backgroundImage =
//     'url("http://127.0.0.1:5500/images/heart-white.png")';
//   heartClick.style.backgroundColor = "#2c71b8";
// };

heartClick.addEventListener("click", function () {
  if (
    heartClick.style.backgroundImage ===
    'url("http://127.0.0.1:5500/images/heart-blue.png")'
  ) {
    heartClick.style.backgroundImage =
      'url("http://127.0.0.1:5500/images/heart-white.png")';
    heartClick.style.backgroundColor = "#2c71b8";
  } else {
    heartClick.style.backgroundImage =
      'url("http://127.0.0.1:5500/images/heart-blue.png")';
    heartClick.style.backgroundColor = "unset";
  }
});

// picChange();
console.log(heartClick.style.backgroundImage);
