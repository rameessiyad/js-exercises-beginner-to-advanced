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
