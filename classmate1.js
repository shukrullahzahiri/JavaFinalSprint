fetch('./sprint.json')
  .then(response => response.json())
  .then(data => {
    // Loop through an array in the JSON data
    data.forEach(person => {
      console.log(getFullName(person));
      console.log(getAge(person));
    });
  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

  function getFullName(person) {
    return `${person.FirstName} ${person.LastName}`;
  }

  function getAge(person) {    
    const birthYear = new Date(person.BirthDate).getFullYear();  // Corrected typo: Birthday to BirthDate
    const currentYear = new Date().getFullYear();
    return `${person.FirstName} is ${currentYear - birthYear} years old.`;
  }