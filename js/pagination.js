function Pagination() {
  this.isNoActive = true;
  this.activePage = 1;
}

Pagination.prototype.cleanUpList = function () {
  while (pages.firstChild) {
    pages.removeChild(pages.firstChild);
  }
};

Pagination.prototype.deleteClass = function () {
  [...paginItem].forEach((element) => {
    element.classList.remove("page__active");
  });
};

Pagination.prototype.render = function (length) {
  this.cleanUpList();
  const count = length;
  let maxElement = 5;
  let page = 1;
  let pageNumbers = Math.ceil(count / maxElement);
  for (let i = 0; i < pageNumbers; i++) {
    if (count > 5) {
      const li = document.createElement("li");
      li.classList.add("page__noActive");
      const val = document.createTextNode(page);
      li.append(val);
      li.addEventListener("click", () => {
        this.deleteClass();
        this.activePage = i + 1;
        ToDoListController.render();
        li.classList.add("page__active");
      });
      page++;
      pages.append(li);
    }
  }
};

var toDoListPagination = new Pagination();
