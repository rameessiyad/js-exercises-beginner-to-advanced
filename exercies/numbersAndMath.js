//1 At a restaurant, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice cream for $5, calcuate the cost of the order.
// console.log
(10 + 3 * 8 + 5);

//2 you're at the restaurant  with 2 friends (3 people in total) and make the same order as question 1, calculate how much each person pays
let costPerOrder = 10 + 3 * 8 + 5;
let costPerPerson = costPerOrder / 3 //-> cost per person


//3 calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each).
console.log(18.50 + 2 * 7.50, "total cost of 2 toasters and 2 shirts")

//4 calculate a 10% tax for the total in above exercise
let totalCost = 18.50 + 2 * 7.50;
let tax = totalCost * 0.1; //-> 10% tax -> 10/100 -> 0.1
console.log(tax, "total cost of 2 toasters and 2 shirts with 10% tax")

//5 calculate a 20% tax fot the total in above question (remember that 1% = 1/100, so 20% is 20/100 = 0.2)
let twentyPercentTax = totalCost * 0.2;
console.log(twentyPercentTax, "total cost of 2 toasters and 2 shirts with 20% tax")