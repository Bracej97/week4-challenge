
var taskTableEl = document.getElementById("task-table");
// 1. use document.getElementById to select the searchTerm Button
var inputTaskEl = document.getElementById("input-task");
// 2. use document.getElementById to select the searchButton Button
var addTaskButtonEl = document.getElementById("add-task-button");
// 3. add an event listener to the searchButton that calls the search function when clicked
addTaskButtonEl.addEventListener("click", add);

function add() {
  // 4. use the value property of the searchInput to get the search term
    let task = inputTaskEl.value;
    if (task != "") {
  // 5. select the searches div using document.getElementById

  // 6. create a new li element using document.createElement
    var newRowEl = document.createElement("tr");
    newRowEl.innerHTML = `
        <td>Incomplete</td>
        <td>${task}</td>
        <td>Placeholder</td>
        <td><button class="complete-btn">Mark as Complete</button></td>
        `
  // 7. set the innerHTML of the new paragraph to the search term

  // 8. append the new paragraph to the searches div
    taskTableEl.appendChild(newRowEl);
    }
};

var completeButtonEl = document.getElementById("complete-btn");

completeButtonEl.addEventListener("click", complete);

function complete() {
  let thisRow = completeButtonEl.parentNode;
  console.log(thisRow.children)
}
