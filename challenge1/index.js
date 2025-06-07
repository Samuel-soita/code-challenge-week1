function chaiCalculator(cups) {
  // Calculate the amount of each ingredient based on the number of cups
  let water = cups * 200;
  let milk = cups * 50;
  let tea = cups * 1;
  let sugar = cups * 2;

  // Print out the required ingredients
  console.log("To make " + cups + " cups of Kenyan Chai, you will need:");
  console.log("Water: " + water + " ml");
  console.log("Milk: " + milk + " ml");
  console.log("Tea Leaves (Majani): " + tea + " tablespoons");
  console.log("Sugar (Sukari): " + sugar + " teaspoons");
  console.log("Enjoy your Chai Bora!");
}

// Prompt the user to enter the number of chai cups they want to make
let userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");

// Convert the user input to a number
let cups = parseInt(userInput);

// Check if the input is a positive number before calculating
if (cups > 0) {
  chaiCalculator(cups);
} else {
  // If input is invalid, show an error message
  console.log("Please enter a valid number.");
}

