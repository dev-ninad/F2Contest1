/** @format */

const employees = [
    { id: 1, name: "John", age: "30", profession: "developer" },
    { id: 2, name: "Mary", age: "25", profession: "designer" },
    { id: 3, name: "Mike", age: "32", profession: "admin" },
  ];
  
  
  function PrintDeveloperbyMap() {
    const developers = employees.filter(employee => employee.profession === 'developer');
    const developerNames = developers.map(developer => developer.name);
    console.log("Developers by Map: ", developerNames);
  }
  
  // Print all employees who have profession of developer using the forEach function
  function PrintDeveloperbyForEach() {
    const developers = [];
    employees.forEach(employee => {
      if (employee.profession === 'developer') {
        developers.push(employee.name);
      }
    });
    console.log("Developers by forEach: ", developers);
  }
  
  // Add a new employee object to the employees array
  function addData() {
    const newEmployee = { id: 4, name: "Susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log("Employee added:",employees);
  }
  
  // Remove the employee object where the profession is admin
  function removeAdmin() {
    const filteredEmployees = employees.filter(employee => employee.profession !== 'admin');
    console.log(filteredEmployees);
  }
  
  // Concatenate the given array with another array of 3 different employee objects
  function concatenateArray() {
    const newArray = [
      { id: 5, name: "David", age: "28", profession: "manager" },
      { id: 6, name: "Ninad", age: "25", profession: "developer" },
      { id: 7, name: "Bhushan", age: "29", profession: "designer" },
    ];
    const concatenatedArray = employees.concat(newArray);
    console.log("Concatenated array: ", concatenatedArray);
  }