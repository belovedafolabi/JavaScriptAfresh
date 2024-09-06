# 🥷 Ninja To-Do List

Welcome to the **Ninja To-Do List** project! This is a sleek and interactive task management app built with **HTML**, **Tailwind CSS**, and **JavaScript**. It leverages **local storage** to save your tasks, so you can always return to your ninja tasks, even after refreshing the page.

## Overview

The Ninja To-Do List allows you to:

- Add new tasks with ease.
- Search through your list of todos dynamically.
- Delete completed tasks with a single click.
- Enjoy smooth, responsive UI powered by **Tailwind CSS**.

The app is a simple yet effective tool for tracking tasks, with a ninja-inspired design and features to ensure your productivity is top-notch.

## Features

- **Add Todos**: Quickly add new todos with the current date.
- **Delete Todos**: Remove completed or irrelevant todos easily.
- **Search Todos**: Filter through your todo list with the built-in search functionality.
- **Local Storage**: All todos are saved in local storage, so they persist between sessions.

## Getting Started

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/belovedafolabi/ninja-todo.git
    ```
2. **Navigate to the Project Directory**:
    ```bash
    cd ninja-todo
    ```
3. **Install Dependencies**:
    Install project dependencies using npm:
    ```bash
    npm install
    ```
4. **Open the App in Your Browser**:
    Once you've cloned the repo and installed the dependencies, you can open the `index.html` file in your preferred browser:
    ```bash
    open index.html
    ```

## How it Works

- The list of todos is stored in the browser's **localStorage**, allowing you to retain your tasks even when the page is refreshed or reopened.
- You can **add new tasks** by typing them in the input box and pressing "Enter".
- Todos are displayed with the **current date** to help you track when they were added.
- Use the **search bar** to dynamically filter through your tasks as you type.
- Click the **delete button** next to any task to remove it from the list and from localStorage.

## Code Structure

### Adding a Todo

```javascript
// Add Listener to detect Enter key press on input
todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && todoInput.value) {
        const date = getFormattedDate();
        const todo = `${todoInput.value.trim()} - ${date}`;
        addTodoToLocalStorage(todo);
        loadTodos();
        todoInput.value = "";
    }
});
```

### Deleting a Todo

```javascript
// Function to delete a todo item from localStorage
function deleteTodoItem(todoText, date) {
    let todoData = JSON.parse(localStorage.getItem('todoData')) || [];
    const todoToDelete = `${todoText.trim()} - ${date.trim()}`;
    const index = todoData.indexOf(todoToDelete);

    if (index !== -1) {
        todoData.splice(index, 1);
        localStorage.setItem('todoData', JSON.stringify(todoData));
        loadTodos();
    }
}
```

### Searching for a Todo

```javascript
// Function to perform the search
function performSearch(query) {
    query = query.toLowerCase();
    const todoData = JSON.parse(localStorage.getItem('todoData')) || [];

    const filteredTodos = todoData.filter(todo => 
        todo.toLowerCase().includes(query)
    );

    displayTodos(filteredTodos);
}
```

## Contact

Feel free to reach out if you have any questions or suggestions:

- **GitHub**: [belovedafolabi](https://github.com/belovedafolabi)
- **Email**: [belovedafolabi@gmail.com](mailto:belovedafolabi@gmail.com)
- **LinkedIn**: [belovedafolabi](https://www.linkedin.com/in/beloved-afolabi)