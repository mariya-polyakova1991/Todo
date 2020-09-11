function FixImage() {
  this.img =
    JSON.parse(localStorage.getItem("imgSave")) || "url(../Images/214588.jpg)";
}

FixImage.prototype.fixImage = function (img) {
  if (img === "royalblue" || "black" || "pink") {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = img;
  }
  document.body.style.backgroundImage = img;

  menu.classList.remove("menu__nav__open");
  const imgSave = localStorage.setItem("imgSave", JSON.stringify(img));
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
  ImgController.fixImage("black");
});
blue.addEventListener("click", function () {
  ImgController.fixImage("royalblue");
});
pink.addEventListener("click", function () {
  ImgController.fixImage("pink");
});

var ImgController = new FixImage();
ImgController.fixImage(ImgController.img);
