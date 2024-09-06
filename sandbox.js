// Import Utils
import { getFormattedDate } from './dateUtils.js';
// Add Todo Element
const todoInput = document.querySelector('#todoAdd');
// Delete Element for all Todos
const todoDeleteBtn = document.querySelectorAll('.todoDeleteBtn');
// To DO List Element
const todoDivList = document.querySelector('#toDoDivList');
// Clear button element
const clrBtn = document.querySelectorAll('.clearBtn');

// To do data
let todoData = [];


// Function to initialize todoData
function initializeTodoData() {
    // Retrieve todoData from localStorage
    const storedData = localStorage.getItem('todoData');

    // Check if storedData exists
    if (storedData) {
        // Parse and load the existing todoData
        todoData = JSON.parse(storedData);
    } else {
        // Initialize todoData and save it to localStorage
        todoData = [];
        localStorage.setItem('todoData', JSON.stringify(todoData));
    }
}


// Add New todo to the localStorage function()
function addTodoToLocalStorage(todo) {
    // Retrieve existing todoData from localStorage
    let storedData = localStorage.getItem('todoData');
    let todoData = storedData ? JSON.parse(storedData) : [];

    // Add new todo to the beginning of the todoData array
    todoData.unshift(todo);

    // Save the updated todoData back to localStorage

    if(localStorage.setItem('todoData', JSON.stringify(todoData))){
        console.log(`added "${todo}" suceessfully`);
    }else{
        console.warn(`Adding todo failed`);
    }
}


// function to loop through todoData from localStorage and output div to todoDivList
/**
 * Loops through todoData from localStorage and appends each todo item as a <div> to todoDivList.
 */
function loadTodos() {
    // Retrieve todoData from localStorage
    let storedData = localStorage.getItem('todoData');
    
    // Parse the data or initialize an empty array if no data is found
    let todoData = storedData ? JSON.parse(storedData) : [];

    // Clear existing content
    todoDivList.innerHTML = '';

    // Loop through each item in todoData
    todoData.forEach(todo => {
        // split the Todo into text and date parts
        let [todoText, date] = todo.split(' - ');
        // Create a new <div> element for each todo item
        let todoDiv = document.createElement('div');
        todoDiv.className = 'todoList group';

        // Set the HTML content of the <div>
        todoDiv.innerHTML = `
            <div class="flex flex-col">
                <p class="">
                    ${todoText}
                </p>
                <span class="todoDate">
                    ${date}
                </span>
            </div>
            <span class="todoDeleteBtn material-symbols-outlined">
                delete
            </span>
        `;

        // Append the new <div> to the todoDivList
        todoDivList.appendChild(todoDiv);
    });

    // Add delete functionality to each delete button
    document.querySelectorAll('.todoDeleteBtn').forEach(button => {
    button.addEventListener('click', () => {
        // Get the parent div that contains the paragraph and date
        const todoContainer = button.previousElementSibling;
        
        // Get the text content of the paragraph inside the parent div
        const todoText = todoContainer.querySelector('p').textContent.trim();
        // Get the date content inside the parent div
        const date = todoContainer.querySelector('.todoDate').textContent.trim();
        
        // Function to delete todo
        deleteTodoItem(todoText, date);
    });
});
}


// Function to perform the search
function performSearch(query) {
    // Clear the current displayed todos
    todoDivList.innerHTML = '';

    // Convert the query to lower case for case-insensitive search
    query = query.toLowerCase();

    // Initialize To Do to ensure To Do data is up-to-date
    initializeTodoData();

    // Filter and display the todos that match the query
    todoData.forEach(todo => {
        let [todoText, date] = todo.split(' - ');

        // Check if the todoText or date includes the query string
        if (todoText.toLowerCase().includes(query) || date.toLowerCase().includes(query)) {
            let todoDiv = document.createElement('div');
            todoDiv.className = 'todoList group';

            todoDiv.innerHTML = `
                <div class="flex flex-col">
                    <p class="">
                        ${todoText}
                    </p>
                    <span class="todoDate">
                        ${date}
                    </span>
                </div>
                <span class="todoDeleteBtn material-symbols-outlined">
                    delete
                </span>
            `;

            todoDivList.appendChild(todoDiv);
        }
    });

    // Re-attach the delete functionality to the filtered items
    document.querySelectorAll('.todoDeleteBtn').forEach(button => {
        button.addEventListener('click', () => {
            const todoContainer = button.previousElementSibling;
            const todoText = todoContainer.querySelector('p').textContent.trim();
            const date = todoContainer.querySelector('.todoDate').textContent.trim();
            deleteTodoItem(todoText, date);
        });
    });
}

// Function to delete a todo item from localStorage
function deleteTodoItem(todoText, date) {
    // Retrieve todoData from localStorage
    let storedData = localStorage.getItem('todoData');
    let todoData = storedData ? JSON.parse(storedData) : [];

    // Combine text and date to match the full stored format
    // use trim() to ensure there are no whitespaces
    const todoToDelete = `${todoText.trim()} - ${date.trim()}`;

    // Find the index of the todo item with the matching text and date
    const index = todoData.indexOf(todoToDelete);

    // Remove the item from the array if it exists
    if (index !== -1) {
        todoData.splice(index, 1);
    }else {
        console.warn('Item not found in the list!');
    }

    // Save the updated todoData back to localStorage
    localStorage.setItem('todoData', JSON.stringify(todoData));

    // Reload todos to reflect changes in the UI
    loadTodos();
}


// Functions to run when the page has fully loaded
window.addEventListener('DOMContentLoaded', (event) => {
    // what the function says :-|
    initializeTodoData();
    // Loops through todoData in localStorage to output currnt todos
    loadTodos();
});


// Event to clear the value previous sibling element (input)
clrBtn.forEach(button => {
    // Input field
    const inputField = button.previousElementSibling;

    // Function to toggle clear button visibility
    function toggleClearButton() {
        if (inputField.value) {
            button.classList.remove('hidden');
        } else {
            button.classList.add('hidden');
        }
    }

    // Event to toggle button visibility on input field change
    inputField.addEventListener('input', toggleClearButton);

    // Event to show clear button when input field is focused
    inputField.addEventListener('focus', () => {
        button.classList.remove('hidden');
    });

    // Event to hide clear button when input field loses focus, if empty
    inputField.addEventListener('blur', () => {
        if (!inputField.value) {
            button.classList.add('hidden');
        }
    });

    // Event to clear input field on clear button click
    button.addEventListener('click', () => {
        inputField.value = '';
        toggleClearButton(); // Hide button after clearing input
        inputField.focus(); // Optionally refocus input
        // Loops through todoData in localStorage to output current todos
        loadTodos();
    });


    // Initial check to hide button if input is empty
    toggleClearButton();
});


// Add Listener to for Key press action
todoInput.addEventListener('keydown', (event)=>{

    // Check that it's the enter key that was pressed.
    if(event.key === 'Enter'){
        
        //Ensure To Do is filled before adding to list
        if(todoInput.value){
            // get date - 23-Aug-2024
            let date = getFormattedDate();
            
            // To DO Value with date attached
            let todo = `${todoInput.value.trim()} - ${date}`;

            // Call the function to add the todo item to localStorage
            addTodoToLocalStorage(todo);

            // Div Element to be appended to the To Do list
            loadTodos();
            
            // Empty the input field
            todoInput.value = "";
        }else{
            alert('bad');
        }
    }

});


// Add Event Listener to the search input
todoSearch.addEventListener('input', () => {
    performSearch(todoSearch.value);
});