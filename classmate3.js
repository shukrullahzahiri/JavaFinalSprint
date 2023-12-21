const incomeTaxRate = 0.15;

// FETCH and READ the sprint.json disk file
fetch('./sprint.json')
  .then(response => response.json())
  .then(data => {
    // Create a container to hold the people data
    const container = document.createElement('div');
    container.id = 'peopleContainer';

    // Loop through an array in the JSON data
    data.forEach(person => {
      // Create a new div for each person
      const personDiv = document.createElement('div');
      personDiv.className = 'person';

      // Add the person's data to the div
      personDiv.innerHTML = `
        <h2>${getFullName(person)}</h2>
        <p>Age: ${getAge(person)}</p>
        <p>Net Income: ${getNetIncome(person)}</p>
        <p>Sprint Group Number: ${getSprintGroupNumber(person)}</p>
      `;

      // Add the person's div to the container
      container.appendChild(personDiv);

      // Also log the data to the console
      console.log(getFullName(person));
      console.log(getAge(person));
      console.log(getNetIncome(person));
      console.log(getSprintGroupNumber(person));
    });

    // Add the container to the body of the HTML
    document.body.appendChild(container);
  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

function getSprintGroupNumber(person) {
  return person.SprintGroupNumber;
}

function getFullName(person) {
  return `${person.FirstName} ${person.LastName}`;
}

function getAge(person) {
  const birthYear = new Date(person.BirthDate).getFullYear();
  const currentYear = new Date().getFullYear();
  return `${person.FirstName} is ${currentYear - birthYear} years old.`;
}

function getNetIncome(person) {
  const deductions = getIncomeTax(person);
  const netIncome = person.Salary - deductions;
  return `${person.FirstName} has a yearly net income of ${netIncome}.`;
}

function getIncomeTax(person) {
  return person.Salary * incomeTaxRate;
}
