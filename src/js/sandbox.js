// Async and Await

const getTodo = async() => {
    const response = await fetch('../todos/taiwo.json');
    const data = await response.json();

    return data;
}

getTodo()
    .then(data => {
        console.log('resolved', data);
    })
    .catch(err => {
        console.log('could not load resource', err);
    })
;
/* // Fetch API
fetch('../todos/taiwo.json').then( response => {

    console.log('resolved', response);
    return response.json();

}).then( data => {

    console.log(data);

}).catch( err => {

    console.log('rejected', err);

}); */
// Old Method of getting data from external resource
/* const getTodos = (resources)=>{

    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', ()=>{
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4){
                reject('error getting resource');
            }
        });
        request.open('GET', resources);
        request.send();
    });

}

getTodos('../todos/taiwo.json').then((data)=>{
    console.log('promise 1 resolved:', data);
    return getTodos('../todos/musa.json');
}).then(data =>{
    console.log('promise 2 resolved', data);
    return getTodos('../todos/luigi.json');
}).then(data => {
    console.log('promise 3 resolved', data)
}).catch((err)=>{
    console.log('promise rejected:', err);
});

getTodos('../todos/taiwo.json', (err, data)=>{
    console.log('Taiwo data retrieved.');
    console.log(data);
    getTodos('../todos/luigi.json', (err, data)=>{
        console.log('Luigi data retrieved.');
        console.log(data);
        getTodos('../todos/musa.json', (err, data)=>{
            console.log('Musa data retrieved.');
            console.log(data);   
        })
    });
}); */

// Promise Example

/* const getSomething = ()=>{

    return new Promise((resolve, reject)=>{

        //resolve('some data');
        reject('some error');

    });
}

getSomething().then((data)=> {
    console.log(data);
}, (err)=>{
    console.log(err);
}); */


/* // Form Element
const form = document.getElementById("ninjaForm");
// Score Display Element
const scoreContent = document.getElementById("scoreContent");
// Score Percentage
const scorePercentage = document.getElementById("scorePercentage");


form.addEventListener('submit', e =>{
    e.preventDefault();
    // Mark quiz function from quiz.js
    const score = markQuiz(questionAnswers);

    // Percentage based on user score
    const scorePercent = ( score / questionAnswers.length) * 100;
    let i = 0;
    // Timer to animate score by increasing from zero to actual score
    const timer = setInterval(()=>{
        i++;
        scorePercentage.textContent = ` ${i}% `;
        if(i === scorePercent){
            clearInterval(timer);
        }
    }, 50);

    // Display the score percentage after quiz is submitted
    scoreContent.classList.remove('hidden');
    
    // Scroll back to top smoothly
    function smoothScrollToTop() {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothScrollToTop);
            window.scrollTo(0, currentScroll - currentScroll / 11);
        }
    }
    smoothScrollToTop();
}); */