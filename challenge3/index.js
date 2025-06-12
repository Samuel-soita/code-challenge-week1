// Function to estimate mobile money transaction fee
function estimateTransactionFee(amountToSend) {
  // Calculate 1.5% of the amount
  let fee = amountToSend * 0.015;

  // Apply minimum fee of 10
  if (fee < 10) {
    fee = 10;
  }
  // Apply maximum fee of 70
  else if (fee > 70) {
    fee = 70;
  }

  // Total amount to be deducted
  let totalAmount = amountToSend + fee;

  // Print transaction details
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalAmount}`);
  console.log("\nSend Money Securely!");
}

// Prompt user to enter the amount
let userInput = prompt("Unatuma Ngapi? (KES):");

// Convert input to a number
let amount = parseFloat(userInput);

// Proceed if input is valid
if (!isNaN(amount) && amount > 0) {
  estimateTransactionFee(amount);
} else if(!isNaN(amount) && amount < 0){
  console.log("failure, eka pesa inamake sense."); // Please enter a valid amount
}

