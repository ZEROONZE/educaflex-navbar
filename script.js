const bars = document.querySelector(".bars");
const nav = document.querySelector(".nav-items");

bars.addEventListener("click", () => {
  console.log("clicked");
  bars.classList.toggle("active");
  nav.classList.toggle("active");
});
