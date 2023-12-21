// FETCH and READ the sprint.json disk file

fetch('./sprint.json') // Corrected the file path
  .then(response => response.json())
  .then(data => {
    // Loop through an array in the JSON data
    data.forEach(person => {
      console.log(getFullName(person));
      console.log(getAge(person));
      console.log(getFavoriteTeam(person));
      console.log(getGender(person));
    });
  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

function logSprintGroup(person) {
  switch (person.Gender) { // Corrected the property name to Gender
    case "female":
      return `${person.FullName} should use the female change room.`;
    case "male":
      return `${person.FullName} should use the male change room.`;
    default:
      return `${person.FullName} should be mindful in choosing a change room.`;
  }
}

function getFullName(person) {
  return `${person.FirstName} ${person.LastName}`; // Corrected the property name to FirstName
}

function getAge(person) {
  const birthYear = new Date(person.BirthDate).getFullYear();
  const currentYear = new Date().getFullYear();
  return `${person.FirstName} is ${currentYear - birthYear} years old.`;
}

function getGender(person) {
  return person.Gender; // Corrected the property name to Gender
}

function getFavoriteTeam(person) {
  return person.FavoriteTeam; // Added function to get favorite team
}
