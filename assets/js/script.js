
var taskTableEl = document.getElementById("task-table");
// 1. use document.getElementById to select the searchTerm Button
var inputTaskEl = document.getElementById("input-task");
// 2. use document.getElementById to select the searchButton Button
var addTaskButtonEl = document.getElementById("add-task-button");
// 3. add an event listener to the searchButton that calls the search function when clicked
addTaskButtonEl.addEventListener("click", add);

function add() {
  // 4. use the value property of the searchInput to get the search term
    const task = inputTaskEl.value;
    if (task != "") {
  // 5. select the searches div using document.getElementById

  // 6. create a new li element using document.createElement
    var newRowEl = document.createElement("tr");
    newRowEl.innerHTML = `
        <td class="status">Incomplete</td>
        <td class="task">${task}</td>
        <td class="due-date">Placeholder</td>
        <td class="task-buttons">
          <button class="complete-btn">✅</button>
          <button class="edit-btn">🖊️</button>
          <button class="delete-btn">🗑</button>
        </td>
        `
  // 7. set the innerHTML of the new paragraph to the search term

  // 8. append the new paragraph to the searches div
    taskTableEl.appendChild(newRowEl);

    inputTaskEl.value = "";

    var completeButtonArr = document.querySelectorAll(".complete-btn");
    for (let i = 0; i < completeButtonArr.length; i++) {
      completeButtonArr[i].addEventListener("click", complete);
    };

    var editButtonArr = document.querySelectorAll(".edit-btn");
    for (let i = 0; i < editButtonArr.length; i++) {
      editButtonArr[i].addEventListener("click", edit);
    };

    var deleteButtonArr = document.querySelectorAll(".delete-btn");
    for (let i = 0; i < deleteButtonArr.length; i++) {
      deleteButtonArr[i].addEventListener("click", deleteRow);
    };
    }
};


var completeButtonArr = document.querySelectorAll(".complete-btn");


function complete() {
  let currentColEl = this.parentNode;
  let currentRowEl = currentColEl.parentNode;
  let dateColEl = currentColEl.previousElementSibling;
  let taskColEl = dateColEl.previousElementSibling;
  let statusColEl = taskColEl.previousElementSibling;

  statusColEl.innerHTML = "Complete";
  currentRowEl.style.display = "none";
};

function edit() {
  let currentColEl = this.parentNode;
  let currentRowEl = currentColEl.parentNode;
  let dateColEl = currentColEl.previousElementSibling;
  let taskColEl = dateColEl.previousElementSibling;
  let statusColEl = taskColEl.previousElementSibling;

  let currentTask = taskColEl.textContent;
  taskColEl.innerHTML = `<input type="text" value="${currentTask}" id="input-edit">`;

  let acceptButton = document.createElement("button");
  acceptButton.classList.add("accept-edit-button");
  acceptButton.innerHTML = "✅";
  taskColEl.appendChild(acceptButton);

  var editButtonArr = document.querySelectorAll(".accept-edit-button");
    for (let i = 0; i < editButtonArr.length; i++) {
      editButtonArr[i].addEventListener("click", acceptEdit);
    };
};

function acceptEdit() {
  let updateTaskEl = this.parentNode;
  let updatedTask = document.getElementById("input-edit").value;

  updateTaskEl.innerHTML = updatedTask;
}

function deleteRow() {
  let currentColEl = this.parentNode;
  let currentRowEl = currentColEl.parentNode;

  currentRowEl.remove();
};
