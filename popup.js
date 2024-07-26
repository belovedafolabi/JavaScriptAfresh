const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const closeButton = document.querySelector('.popup-close');

//Button to open the popup
button.addEventListener('click', ()=>{
    popup.style.display = 'block';
});

// close button for popup
closeButton.addEventListener('click', ()=>{
    popup.style.display = 'none';
});

// close popup by clicking outside the box

popup.addEventListener('click', ()=>{
    popup.style.display = 'none';
})
