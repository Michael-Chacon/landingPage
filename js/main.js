AOS.init({
  offset: 1,
});

let link = document.querySelector(".links");
document.querySelector(".menu").addEventListener("click", function () {
  link.classList.toggle("active");
  console.log("here");
});
