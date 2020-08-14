ToDoItem.prototype.render = function () {
  allList.addEventListener("click", function () {
    const result = arrAll.filter((filterAll) => filterAll.isActive === true);

    console.log("======result=====", result);
  });
  activeList.addEventListener("click", function () {
    if (filter === 2) {
      console.log("=======arrActive====");
    }
  });
  completedList.addEventListener("click", function () {
    const result = arrAll.filter((filterAll) => filterAll.isActive === false);

    console.log("=======arrCompleted====", result);
  });
};
