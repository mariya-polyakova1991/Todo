function fixImage(img) {
  document.body.style.backgroundImage = img;
  menu.classList.remove("menu__nav__open");
}

function fixColor(color) {
  document.body.style.backgroundColor = color;
  document.body.style.backgroundImage = "none";

  menu.classList.remove("menu__nav__open");
}

panda.addEventListener("click", function () {
  fixImage("url(../Images/10.jpg)");
});

rainbow.addEventListener("click", function () {
  fixImage("url(../Images/rainbow-rain-1.jpg)");
});
forest.addEventListener("click", function () {
  fixImage("url(../Images/150502878459b4eab0107551.22903829.jpg)");
});

space.addEventListener("click", function () {
  fixImage("url(../Images/1581997163.jpg)");
});

ice.addEventListener("click", function () {
  fixImage("url(../Images/214588.jpg)");
});

black.addEventListener("click", function () {
  fixColor("black");
});
blue.addEventListener("click", function () {
  fixColor("royalblue");
});
pink.addEventListener("click", function () {
  fixColor("pink");
});
