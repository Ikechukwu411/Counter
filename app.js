const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((btn) => {
  if (btn.classList.contains("decrease")) {
    btn.addEventListener("click", function () {
      count--;
      value.textContent = count;
      value.style.color = "red";
    });
  } else if (btn.classList.contains("increase")) {
    btn.addEventListener("click", function () {
      count++;
      value.textContent = count;
      value.style.color = "green";
    });
  } else if (btn.classList.contains("reset")) {
    btn.addEventListener("click", function () {
      count = 0;
      value.textContent = count;
      value.style.color = "hsl(209, 61%, 16%)";
    });
  }
});
