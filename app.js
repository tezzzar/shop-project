var heartClick = document.querySelector(".prod-pic3");
var style = getComputedStyle(heartClick);

heartClick.addEventListener("click", function () {
  if (
    heartClick.style.backgroundImage ===
    'url("http://127.0.0.1:5500/images/heart-white.png")'
  ) {
    heartClick.style.backgroundImage =
      'url("http://127.0.0.1:5500/images/heart-blue.png")';
    heartClick.style.backgroundColor = "unset";
  } else {
    heartClick.style.backgroundImage =
      'url("http://127.0.0.1:5500/images/heart-white.png")';
    heartClick.style.backgroundColor = "#2c71b8";
  }
});

console.log(heartClick);
