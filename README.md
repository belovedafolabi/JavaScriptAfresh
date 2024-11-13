# Async JavaScript Demo

Welcome to the **Async JavaScript Demo** project! Here, I dive into the world of asynchronous JavaScript to explore different ways of fetching and handling data. Through this project, I demonstrate the evolution of asynchronous code in JavaScript, from the old `XMLHttpRequest` method to modern techniques like `fetch` and `async/await`.

## Project Overview

With this project, I aim to provide a hands-on look at the various ways we can handle async operations in JavaScript. I’m focusing on how to fetch JSON data from external resources (in this case, sample to-do lists) using three main approaches:
1. **Async/Await**
2. **Fetch API (Promises)**
3. **XMLHttpRequest (Legacy)**

## Files and Directories

- `index.html` — The HTML file containing the basic structure for the demo.
- `js/sandbox.js` — The JavaScript file where all the asynchronous functions and event handlers are written.
- `todos/` — A folder with three sample JSON files (`taiwo.json`, `musa.json`, and `luigi.json`), each representing a to-do list for different users.

## Demo Breakdown

### 1. Async/Await Function

In `sandbox.js`, I start by using an `async` function to fetch data from a JSON file. With the help of `await`, this function pauses until the fetch request is resolved, simplifying error handling and making the code more readable. This modern approach is ideal for real-world applications!

```javascript
const getTodo = async () => {
    const response = await fetch('../todos/taiwo.json');
    const data = await response.json();
    return data;
};
```

### 2. Fetch API (Promise-Based)

Next, I demonstrate the standard Fetch API, using chained `.then()` methods. This approach is great for projects that need a bit more control over each step of the request and response handling.

```javascript
fetch('../todos/taiwo.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log('rejected', err));
```

### 3. Legacy XMLHttpRequest

I included the XMLHttpRequest method to show how far we’ve come in JavaScript! Using callbacks, I manage the different states of the request, showing how we used to handle async requests before promises and async/await became available.

```javascript
const getTodos = (resources) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('error getting resource');
            }
        });
        request.open('GET', resources);
        request.send();
    });
};
```

## How to Use

1. Clone the repository.
2. Open `index.html` in a browser.
3. Watch the console log as different async functions fetch and display JSON data!

## What I Learned

Working on this project solidified my understanding of async code in JavaScript. I now have a better grasp of when to use each approach:
- **Async/Await** is perfect for readability and handling sequential async tasks.
- **Promises and Fetch** offer more granular control when I need to handle multiple `.then()` steps.
- **XMLHttpRequest**... well, it’s mostly for historical interest now but shows how async programming evolved.

## Future Improvements

Moving forward, I’d like to:
- Add error handling for specific status codes to show users more informative messages.
- Try out additional async patterns, like combining async functions with generators for more complex workflows.

## Closing Thoughts

I created this demo to deepen my understanding of async JavaScript, and I hope it helps you as well! Whether you’re brushing up on async functions or just exploring new ways to write cleaner code, I hope this project is as fun for you as it was for me.
```

## Contact

Feel free to reach out if you have any questions or suggestions:

- **GitHub**: [belovedafolabi](https://github.com/belovedafolabi)
- **Email**: [belovedafolabi@gmail.com](mailto:belovedafolabi@gmail.com)
- **LinkedIn**: [belovedafolabi](https://www.linkedin.com/in/beloved-afolabi)