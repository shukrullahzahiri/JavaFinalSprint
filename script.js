// script.js
fetch('Sprint.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Check if data is successfully retrieved
    displayData(data);  // Call a function to display data
  })
  .catch(error => console.error('Error:', error));

function displayData(data) {
  // Example: Display data in the browser console
  data.forEach(item => {
    console.log(item);
  });

  // Call other functions to further process and display data as needed
  processData(data);
}

function processData(data) {
  // Example: Process data and display specific information
  data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
  });

  // You can add more processing and display functions as per your project requirements
}
