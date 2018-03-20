// Check that the JS document is linked to the HTML document.
console.log('Project 2!');

// Create 2 arrays holding the first and last name elements to combine for our user-specified quantity of random names.
var firstName = ["Cathy", "Jeremy", "Tim", "Alex", "Skeletor", "Marcie", "Theresa", "Blair", "Megan", "Andrew", "Scott", "Dominic", "Daniel", "Paul"];
var lastName = ["Jones", "Brown", "Johnson", "Williams", "Jackson", "Redman", "Greene", "Smith", "Miller", "Taylor", "Wilson", "Hall", "Kennedy", "Richman"];

// Create a function "getName()" to call one random element from each array, and assign it to the variable "randName" to be retrieved by the "nameQuant()" function.
function getName() {
var randName = firstName[Math.floor(Math.random() * firstName.length)] + ' ' + lastName[Math.floor(Math.random() * lastName.length)];
return randName;
}

// Create a variable to retrieve the user's specified quantity from the DOM form. Print the element combinations from the "getName()" function the specified number of times.
function nameQuant() {
	var userQuant = document.querySelector('.user-amount').value;
	for (var i = 0; i < userQuant && userQuant <= 10; i++) {
		document.querySelector('.list-it').innerHTML += getName() + '<br>';
	} 
}