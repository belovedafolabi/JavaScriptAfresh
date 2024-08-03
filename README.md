# Custom Ninja Quiz 🥷

Welcome to my Custom Ninja Quiz project! This is where I bring out the ninja in you by asking fun and engaging ninja-related questions. This project uses HTML, CSS (with Tailwind), and JavaScript to create an interactive quiz experience. Let's dive into the details!

## Overview

In this project, you'll find a collection of ninja-themed questions designed to test your ninja knowledge. I've used vanilla JavaScript to dynamically generate the quiz questions and handle the form submission. The styling is done using Tailwind CSS to ensure a sleek and modern look.

## Getting Started

To get started with the Custom Ninja Quiz, follow these steps:

1. **Clone the repo**:
    ```sh
    git clone https://github.com/belovedafolabi/ninja-quiz.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd ninja-quiz
    ```
3. **Install project dependencies**:
    ```sh
    npm install
    ```
4. **Open `index.html` in your browser**:
    ```sh
    open index.html
    ```

## Quiz Questions

The quiz consists of fun and quirky ninja-related questions. Each question has multiple choices, and one of them is marked as the correct answer. Here's an example of how the questions are structured in the code:

```javascript
const questionAnswers = [
    "How do you give a ninja directions? - *Show them a map - Don't worry the ninja would find you",
    "Why don't ninjas get lost? - They have a sixth sense - *They leave a trail of shurikens",
    "What do you call a ninja who can’t fight? - *A black belt in hide-and-seek - A shadow expert",
    "How does a ninja get around? - By stealth mode - *Using ninja stars as wheels",
    "Why did the ninja go to school? - *To master the art of the silent 'A+' - To become a math ninja"
];
```

## Scrolling to Top

To enhance user experience, I added a smooth scroll-to-top feature using JavaScript:

```javascript
// Smooth scroll to top
function smoothScrollToTop() {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 8);
    }
}

// Event listener for the button
document.getElementById('scrollToTopBtn').addEventListener('click', smoothScrollToTop);
```

## Contact

Feel free to reach out to me if you have any questions or suggestions!

- **GitHub**: [belovedafolabi](https://github.com/belovedafolabi)
- **Email**: [belovedafolabi@gmail.com](mailto:belovedafolabi@gmail.com)
- **LinkedIn**: [belovedafolabi](https://www.linkedin.com/in/beloved-afolabi)

Happy coding and may your ninja skills be ever sharp! 😄

---

Let me know if you need any more adjustments or have other questions!