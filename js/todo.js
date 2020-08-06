const input = document.getElementById("task");
const buttonAdd = document.getElementById("add");
const list = document.getElementById("ol");

function Task(value) {
  this.value = value;
  this.add = function () {
    if (!this.value == "") {
      let li = document.createElement("li");
      li.className = "alert";
      li.innerHTML = input.value;
      list.prepend(li);
    }
  };
}

buttonAdd.addEventListener("click", function () {
  const massage = new Task(input.value);
  massage.add();
  input.value = "";
});
document.addEventListener("keydown", function (evt) {
  if ((evt.keyCode === 13) & (!input.value == "")) {
    const massage = new Task(input.value);
    massage.add();
    input.value = "";
  }
});

// buttonAdd.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   if (!input.value == "") {
//     console.log("=======button====");
//     let li = document.createElement("li");
//     li.className = "alert";
//     li.innerHTML = input.value;
//     list.prepend(li);
//     input.value = "";
//   }
// });

// document.addEventListener("keydown", function (evt) {
//   if ((evt.keyCode === 13) & (!input.value == "")) {
//     console.log("=======button====");
//     let li = document.createElement("li");
//     li.className = "alert";
//     li.innerHTML = input.value;
//     list.prepend(li);
//     input.value = "";
//   }
// });
