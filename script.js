// so much empty
// Wait for the page to load
window.addEventListener("load", function () {
   // Make the GET request   

fetch("https://jsonplaceholder.typicode.com/posts")
       .then(function (response) {
           // Convert the response to JSON
           return response.json();
      })
       .then(function (json) {
           console.log(json); // Log the JSON data
       })
       .catch(function (error) {
           console.error("Error fetching the data:", error);
       });
});