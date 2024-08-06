# JavaScript Array Methods Project 🚀

Welcome to my JavaScript Array Methods project! Here, I demonstrate the use of various array methods such as `filter`, `map`, `find`, and `sort` through practical examples. Let's dive into the details of each method and see some cool implementations.

## Overview

In this project, you'll find examples of how to use different JavaScript array methods to manipulate and transform data. This includes filtering scores, mapping prices, finding specific values, and sorting arrays. Each example is designed to help you understand the power and flexibility of these methods.

## Getting Started

To get started with the JavaScript Array Methods project, follow these steps:

1. **Clone the repo**:
    ```sh
    git clone https://github.com/belovedafolabi/arrayMethods.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd arrayMethods
    ```
3. **Open the `index.html` in your browser to see the examples in action**:
    ```sh
    open index.html
    ```

## Array Methods Examples

### Filter Method

The `filter` method creates a new array with all elements that pass the test implemented by the provided function.

#### Filtering Scores
```javascript
const scores = [20, 10, 15, 35, 45, 19, 21];
const filteredScores = scores.filter(score => score >= 20);
console.log(filteredScores);
```

#### Filtering Premium Users
```javascript
const users = [
    {name: "Afolabi", premium: true},
    {name: "Femi", premium: false},
    {name: "Jackson", premium: true},
    {name: "Emmanuel", premium: false},
    {name: "Secure", premium: true},
    {name: "Gold", premium: false},
    {name: "Faderera", premium: true}
];
const premiumUsers = users.filter(user => user.premium);
console.log(premiumUsers);
```

### Map Method

The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.

#### Mapping Sales Prices
```javascript
const prices = [20, 25, 50, 30, 58, 98, 56, 78];
const salesPrices = prices.map(price => price / 2);
console.log(salesPrices);
```

#### Partial Sales on Products
```javascript
const products = [
    {name: "prawns", price: 200},
    {name: "crackers", price: 100},
    {name: "fish", price: 70},
    {name: "beef", price: 90},
    {name: "milk", price: 57},
    {name: "bread", price: 25},
    {name: "knife", price: 16}
];
const partialSalesProducts = products.map(product => {
    if (product.price >= 60 && product.price < 150) {
        return {name: product.name, price: product.price / 2};
    } else {
        return product;
    }
});
console.log(partialSalesProducts);
```

### Find Method

The `find` method returns the value of the first element in the provided array that satisfies the provided testing function.

#### Finding the First High Score
```javascript
const scores2 = [20, 47, 15, 35, 50, 69, 21];
const firstHighScore = scores2.find(score => score > 50);
console.log(firstHighScore);
```

### Sort Method

The `sort` method sorts the elements of an array in place and returns the sorted array.

#### Sorting Names Alphabetically
```javascript
const names = ['mario', "chun-li", "yoshi", "kevin", "afolabi"];
names.sort();
console.log(names);
names.reverse();
console.log(names);
```

#### Sorting Scores Numerically
```javascript
const userScores = [10, 20, 45, 68, 78, 30, 5, 65, 72, 68, 20, 48];
userScores.sort((a, b) => a - b);
console.log(userScores);
```

### Chaining Array Methods

You can chain multiple array methods to perform complex operations in a single line.

#### Filtering and Mapping Products
```javascript
const products2 = [
    {name: "prawns", price: 200},
    {name: "crackers", price: 100},
    {name: "fish", price: 70},
    {name: "beef", price: 90},
    {name: "milk", price: 57},
    {name: "bread", price: 25},
    {name: "knife", price: 16}
];
const promo = products2
    .filter(product => product.price > 60)
    .map(product => `${product.name} is on promo for ${product.price / 2}`);
console.log(promo);
```

## Contact

Feel free to reach out to me if you have any questions or suggestions!

- **GitHub**: [belovedafolabi](https://github.com/belovedafolabi)
- **Email**: [belovedafolabi@gmail.com](mailto:belovedafolabi@gmail.com)

Happy coding and enjoy exploring the power of JavaScript array methods! 😄
```

Let me know if you need any more adjustments!