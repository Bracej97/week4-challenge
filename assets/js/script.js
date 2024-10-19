// Set up variables that need to be linked to the HTM file
var taskTableEl = document.getElementById("task-table");
var inputTaskEl = document.getElementById("input-task");
var addTaskButtonEl = document.getElementById("add-task-button");
addTaskButtonEl.addEventListener("click", add);

// Create add function for adding task to the table
function add() {
    const task = inputTaskEl.value;
    if (task != "") {

    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    var newRowEl = document.createElement("tr");
    newRowEl.innerHTML = `
        <td class="status">Incomplete</td>
        <td class="task">${task}</td>
        <td class="due-date">${day}/${month}/${year}</td>
        <td class="task-buttons">
          <button class="complete-btn">✅</button>
          <button class="edit-btn">🖊️</button>
          <button class="delete-btn">🗑</button>
        </td>
        `

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

// Create functions for the complete button
function complete() {
  let currentColEl = this.parentNode;
  let currentRowEl = currentColEl.parentNode;
  let dateColEl = currentColEl.previousElementSibling;
  let taskColEl = dateColEl.previousElementSibling;
  let statusColEl = taskColEl.previousElementSibling;

  statusColEl.innerHTML = "Complete";
  currentRowEl.style.display = "none";
};

// Create function for the edit button
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

// Create function for the delete button
function deleteRow() {
  let currentColEl = this.parentNode;
  let currentRowEl = currentColEl.parentNode;

  currentRowEl.remove();
};

// Create variables linked to the HTM doc for the complete and incomplete tasks
let tasksLinkEl = document.getElementById("tasks-link");

let completedTasksLinkEl = document.getElementById("completed-tasks-link");

tasksLinkEl.addEventListener("click", tasksFilter);
completedTasksLinkEl.addEventListener("click", completedTasksFilter);

// Create task filter function for the complete and incomplete tasks buttons
function tasksFilter() {
  let taskTableEl = document.getElementById("task-table");
  let taskFilterRowsArr = taskTableEl.children;
  for (let i = 0; i < taskFilterRowsArr.length; i++) {
    let currentRowFilter = taskFilterRowsArr[i];
    let rowStatus = currentRowFilter.firstElementChild.innerText;
    if(rowStatus === "Incomplete") {
      currentRowFilter.style.display = ""
    } else {
      currentRowFilter.style.display = "none";
    }
  }
}

function completedTasksFilter() {
  let taskTableEl = document.getElementById("task-table");
  let taskFilterRowsArr = taskTableEl.children;
  for (let i = 0; i < taskFilterRowsArr.length; i++) {
    let currentRowFilter = taskFilterRowsArr[i];
    let rowStatus = currentRowFilter.firstElementChild.innerText;
    if(rowStatus === "Complete") {
      currentRowFilter.style.display = ""
    } else {
      currentRowFilter.style.display = "none";
    }
  }
}

// Create variable linked to the HTM doc for the search bar
let searchBarEl = document.getElementById("search-bar");

searchBarEl.addEventListener("keyup", searching);


// Create the function to complete the search
function searching() {
  let searchInputEl = searchBarEl.value.toUpperCase();

  let taskTableEl = document.getElementById("task-table");
  let taskFilterRowsArr = taskTableEl.children;
  for (let i = 0; i < taskFilterRowsArr.length; i++) {
    let currentRowFilter = taskFilterRowsArr[i];
    let rowStatus = currentRowFilter.firstElementChild.nextElementSibling.innerText.toUpperCase();
    if(rowStatus.includes(searchInputEl)) {
      currentRowFilter.style.display = ""
    } else {
      currentRowFilter.style.display = "none";
    }
  }
}
