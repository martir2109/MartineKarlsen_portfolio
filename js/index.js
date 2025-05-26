//I followed this tutorial, link: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
let mybutton = document.getElementById("scrollBtn");

window.onscroll = function () {
  scrollUpFunction();
};

function scrollUpFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
