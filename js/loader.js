//I followed this tutorial, link: https://www.youtube.com/watch?v=q76TexbMXJg
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loaderHidden");

  loader.addEventListener("transitionend", () => {
    loader.remove();
  });
});
