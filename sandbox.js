// get the form element
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

// The regEx pattern for the username
const pattern = /^[a-xA-z]{6,}$/;

form.addEventListener('submit', e =>{
    e.preventDefault();

    if(pattern.test(form.username.value)){
        console.log('username is good :)');
    }
    else{
        console.log('username is bad :(');
    }
});

// give live feedback on input validation
form.username.addEventListener('keyup', e =>{

    if(pattern.test(form.username.value)){
        form.username.setAttribute('class', 'success');
        feedback.textContent = 'that username is good';
    }else{
        form.username.setAttribute('class', 'error');
        feedback.textContent = 'the username must contain only letter and be at least 6 characters long.';
    }

});