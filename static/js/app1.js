// Function to build the page
function buildPage() {

// Function for unique values (https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates)
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// Get data from API
const url = "/api";
d3.json(url).then(function(response) {
  const data = response;
  console.log(data[0])
  // Get top 10
  document.getElementById("p1").innerHTML = "New text!"

});
}

buildPage();