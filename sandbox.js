/* const items = document.querySelectorAll('li'); */

const ul = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    li.style.color = 'crimson';
    ul.append(li);
    //ul.prepend(li);
});

/* items.forEach(item => {
    let name = [];
    item.addEventListener('click', e =>{
        e.target.remove();
        e.stopPropagation();
        console.log('Event in LI');
    });
}); */

ul.addEventListener('click', e =>{
    console.log('Event in UL');
    //console.log(e.target)
    if(e.target.tagName == "LI"){
        e.target.remove();
    }
});
