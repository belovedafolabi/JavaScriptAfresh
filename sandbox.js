// Copy Event
const copy = document.querySelector('.copy-me');

// Event listerner to log when a specified element is being copied
copy.addEventListener('copy', ()=>{
    console.log('Oi mate! my content is copyrighted. ')
});

// Event listerner to track the coordinates(X and Y) of the mouse within an element
const box = document.querySelector('.box');

box.addEventListener('mousemove', e =>{
    //console.log(e);
    box.textContent = `x pos- ${e.offsetX} y pos- ${e.offsetY}`;
});

// // Event listerner to track the position of the entire documnet

document.addEventListener('wheel', e =>{
    console.log(e.pageX, e.pageY);
});