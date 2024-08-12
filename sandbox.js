// Add Todo Element
const todoInput = document.querySelector('#todoAdd');
// To DO List Element
const todoDivList = document.querySelector('#toDoDivList');

// Add Listener to for Key press action
todoInput.addEventListener('keydown', (event)=>{

    // Check that it's the enter key that was pressed.
    if(event.key === 'Enter'){
        //Ensure To Do is filled before submission
        if(todoInput.value){
            todoDivList.append('')
            // Empty the input field
            todoInput.value = "";
        }else{
            alert('bad');
        }
    }

});