function FixImage() {
  this.img =
    JSON.parse(localStorage.getItem("imgSave")) || "url(../Images/214588.jpg)";
}

FixImage.prototype.fixImage = function (img) {
  document.body.style.backgroundImage = img;
  menu.classList.remove("menu__nav__open");
  const imgSave = localStorage.setItem("Img", JSON.stringify(img));
};
FixImage.prototype.fixColor = function (color) {
  document.body.style.backgroundColor = color;
  document.body.style.backgroundImage = "none";

  menu.classList.remove("menu__nav__open");
};

panda.addEventListener("click", function () {
  img = "url(../Images/10.jpg)";
  ImgController.fixImage(img);
});

rainbow.addEventListener("click", function () {
  ImgController.fixImage("url(../Images/rainbow-rain-1.jpg)");
});
forest.addEventListener("click", function () {
  ImgController.fixImage(
    "url(../Images/150502878459b4eab0107551.22903829.jpg)"
  );
});

space.addEventListener("click", function () {
  ImgController.fixImage("url(../Images/1581997163.jpg)");
});

ice.addEventListener("click", function () {
  ImgController.fixImage("url(../Images/214588.jpg)");
});

black.addEventListener("click", function () {
  ImgController.fixColor("black");
});
blue.addEventListener("click", function () {
  ImgController.fixColor("royalblue");
});
pink.addEventListener("click", function () {
  ImgController.fixColor("pink");
});

var ImgController = new FixImage();
