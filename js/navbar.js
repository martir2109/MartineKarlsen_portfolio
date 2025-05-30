function toggleNavbar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function toggleIcon(x) {
  x.classList.toggle("change");
}

//close hamburger menu when clicking a navigation button
document.querySelectorAll("#myTopnav .menu a").forEach((navButton) => {
  navButton.addEventListener("click", () => {
    toggleNavbar();
    toggleIcon(document.querySelector(".container"));
  });
});
