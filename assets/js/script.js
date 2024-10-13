

// 1. use document.getElementById to select the searchTerm Button
var searchInputEl = document.getElementById("searchTerm");
// 2. use document.getElementById to select the searchButton Button
var searchButtonEl = document.getElementById("searchButton");
// 3. add an event listener to the searchButton that calls the search function when clicked
searchButtonEl.addEventListener("click", search)

function search() {
  // 4. use the value property of the searchInput to get the search term
    let searchTerm = searchInputEl.value;
    if (searchTerm != "") {
  // 5. select the searches div using document.getElementById
    var searchesEl = document.getElementById("searches");
  // 6. create a new li element using document.createElement
    var newEl = document.createElement("li");
  // 7. set the innerHTML of the new paragraph to the search term
    newEl.innerHTML = searchTerm;
  // 8. append the new paragraph to the searches div
    searchesEl.appendChild(newEl);
    searchInputEl
    } else {

    }
};
