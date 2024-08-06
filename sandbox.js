// An Array of scores
const scores = [20, 10, 15, 35, 45, 19, 21];

// Array objects containing user info and premium flag
const users = [
    {name: "Afolabi", premium: true},
    {name: "Femi", premium: false},
    {name: "Jackson", premium: true},
    {name: "Emmanuel", premium: false},
    {name: "Secure", premium: true},
    {name: "Gold", premium: false},
    {name: "Faderera", premium: true}
];

// filter through the scores to get on scores that are above 20 (for whatever reason :| ).
// since the filter method is not destructive, the filtered output has to be stored in a new variable.
// inside the callback function of the filter method, it would store that current variable if it's condition is met (return true).

// Array Filter Method
// Filter Scores

/*
filteredScores = scores.filter((score) => {
    return score >=20;
});
console.log(scores);
console.log(filteredScores);
*/

// Filter users object to confirm premium users
// Smart thinking because premium flag is already a boolen which is what the filter callback function requires.

/*
premiumUsers = users.filter(user => user.premium);
normalUsers = users.filter(user => !user.premium);
console.log(premiumUsers);
console.log(normalUsers);
*/

// Array Map Method
// Run through the array then carry out a function on each array variable then output that into a new Array -  Not Destructive

// Array of prices, for what? I don't know o
const prices = [20, 25, 50, 30, 58, 98, 56, 78];

// Array Map Method to turn all these prices to prices to be used for the 50% off sales the store is about to undergo.

/*
salesPrices = prices.map((price) => {
    return price/2;
});
console.log(salesPrices);
*/

// Array of the products in a store.
const products = [
    {name: "prawns", price: 200},
    {name: "crackers", price: 100},
    {name: "fish", price: 70},
    {name: "beef", price: 90},
    {name: "milk", price: 57},
    {name: "bread", price: 25},
    {name: "knife", price: 16}
];

// Array Map Method to run through the objects in the Array then apply a 50% off sale to products over #60 but less than #150

/*
partialSalesProducts = products.map((product) => {
    if(product.price >= 60 && product.price < 150){
        return {name: product.name, price: product.price / 2}
    }else{
        return product
    }
});

console.log(partialSalesProducts);
*/

// Array Find Method
// Run through the variables in an Array then return the very first Array Variable that meets the specified requirement.
// Why? I do not know :'( 

// Array of scores from users in a game.
const scores2 = [20, 47, 15, 35, 50, 69, 21];

// Find the first score above 50 in the score Array

/*
const firstHighScore = scores2.find((score) => {
    return score > 50;
});

console.log(firstHighScore);
*/


// Array Sort Method
// Carry out a sort operation on the entirety of the array - Alphabetic sort, Highest Number Sort etc.
// This is a destructive Method

const names = ['mario', "chun-li", "yoshi", "kevin", "afolabi"];

// sort method to arrange the Array variable to be in an alphabetic order
/* names.sort();
console.log(names); */

// reverse method to list the Array variables from the last variable to the first. No Alphabetic operation is done.
/* names.reverse();
console.log(names); */

userScores = [10, 20, 45, 68, 78, 30, 5, 65, 72, 68, 20, 48];

// sort to arrange the numbers in a least to highest
/* userScores.sort();
console.log(userScores); */

// Note: The sort method for numbers checks only the first digit, hence the 5 in the array would not come before the 10.
//
// Comparison is used on the sort method to solve this issue.
// a and b are compared then 
// if a > b return a positive value(+).
// elif b > a return a negative value(-).  
// else return 0
// this correctly sorts the entire Array

/* userScores.sort((a, b) => {
    if(a > b){
        return 1;
    }else if(b > a){
        return -1;
    }else{
        return 0;
    }
});
console.log(userScores); */

// Same thing can be done in a shorter way.
/* userScores2 = [10, 20, 45, 68, 78, 30, 5, 65, 72, 68, 20, 48];
userScores2.sort((a , b) =>  a - b);
console.log(userScores2); */

// Chaining Array Methods
// Basically to carry out two or more Array Methods on one variable or one line... Do you get?

const products2 = [
    {name: "prawns", price: 200},
    {name: "crackers", price: 100},
    {name: "fish", price: 70},
    {name: "beef", price: 90},
    {name: "milk", price: 57},
    {name: "bread", price: 25},
    {name: "knife", price: 16}
];

// Task 1. Filter through the Array to get products that are priced at over #60.
// Task 2. Map through the Filtered Array to then out put strings stating the product name then the promo price.

/* const promo = 
    products2
    .filter(product => product.price > 60)
    .map((product) => {
        return `${product.name} is on promo for ${product.price / 2}`;
    });

console.log(promo); */