let openButton = document.getElementById("openButton");
let closeButton = document.getElementById("closeButton");
let leftSection = document.getElementById("leftSection");
let rightSection = document.getElementById("rightSection");

openButton.addEventListener("click", () => {
  leftSection.style.width = "40%";
  rightSection.style.width = "40%";
  rightSection.style.opacity = 1;
});
closeButton.addEventListener("click", () => {
      leftSection.style.width = "80%";
      rightSection.style.width = "0%";
      rightSection.style.opacity = 0;
});
