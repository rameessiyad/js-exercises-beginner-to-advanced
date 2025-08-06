//q1 create a variable 'hour' and save the current hour of the day(use 24 hour format and save it as a number between 0 and 23 ).
//if hour is between 6 and 12, log "Good Morning"
//if hour is between 13 and 17, log "Good Afternoon"
//otherwise log "Good night"

let hour = new Date().getHours();

if (hour >= 6 && hour <= 12) {
  console.log("Good Morning");
} else if (hour >= 13 && hour <= 17) {
  console.log("Good Afternoon");
} else {
  console.log("Good Night");
}

// Imagine an amusement park that has a discount for children (6 years and younger) or seniors (65 years and older).
// Create a variable age and save a person’s age inside.
// Create an if-statement that checks if the person qualifies for a discount. If they do, display 'Discount' in the console. Otherwise, display 'No discount' in the console.
// Note: try to use the || operator in your solution.
// Try changing the age variable to display different messages.
