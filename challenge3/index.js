// Function to calculate fare based on input distance
function calculateFare(distanceInput) {
  // Convert input to a number
  const distance = Number(distanceInput);

  // Validate input: must be a positive number
  if (isNaN(distance) || distance <= 0) {
    console.log("Enter a valid positive number.");
    return;
  }

  // Fixed base fare amount
  const base = 50;
  // Charge per kilometer traveled
  const rate = 15;

  // Calculate cost for the distance traveled
  const costForDistance = distance * rate;
  // Total fare is base fare plus distance charge
  const total = base + costForDistance;

  // Output the details in console
  console.log(`Distance: ${distance} km`);
  console.log(`Base fare: KES ${base}`);
  console.log(`Distance charge: KES ${costForDistance}`);
  console.log(`Total fare: KES ${total}`);
  console.log("Safe travels!");
}

// Prompt the user for distance and call the function
const userInput = prompt("Enter trip distance in km:");
calculateFare(userInput);
