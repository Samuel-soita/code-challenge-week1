function calculateBodaFare(distanceInKm) {
  // Define the base fare and per kilometer charge
  const baseFare = 50;
  const chargePerKm = 15;

  // Calculate the fare for the distance traveled
  const distanceFare = distanceInKm * chargePerKm;

  // Calculate total fare by adding base fare and distance fare
  const totalFare = baseFare + distanceFare;

  // Print the fare details to the console in a friendly format
  console.log("Uko kwote? Io ni " + distanceInKm + " km:");
  console.log("Ukikalia Pikipiki: KES " + baseFare);
  console.log("Mpaka Uko: KES " + distanceFare);
  console.log("Total: KES " + totalFare);
  console.log("Panda Pikipiki!");
}

// Prompt the user for distance input and convert to a number
let userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
let distance = parseFloat(userInput);

if (distance > 0) {
  calculateBodaFare(distance);
} else {
  console.log("Tafadhali ingiza nambari halali.");
}
