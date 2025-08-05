//1 At a restaurant, you order 1 coffee($5) and 1 bagel($3). Using math, calculate the total cost,
// and using concatenation, create the text 'Total cost: $__'(replace with the total you calculated).

let totalCost = 5 + 3;
let text = "Total cost: $" + totalCost;
console.log(text);

//2 do the same thing as in the above, but use a template string and interpolation.

let totalCost2 = 5 + 3;
let text2 = `Total cost: $${totalCost2}`;
console.log(text2);
