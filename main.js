

import data from './data.json' assert {type: 'json'};


const bgColors = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%',
];



let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);


console.log(data);

let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');



const secondSection = document.querySelector('.second-section');




dailyBtn.addEventListener('click', ()=> {
    drawElements(dailyArray);
});

weeklyBtn.addEventListener('click', ()=> {
    drawElements(weeklyArray);
});

monthlyBtn.addEventListener('click', ()=> {
    drawElements(monthlyArray);
});



function drawElements(array) {

    secondSection.innerHTML = "";
    array.forEach( (element, index) => {

        let title = data[index].title;
        let LowerCase = title.toLowerCase();
        

        secondSection.innerHTML += `
        <div class="card">
            <div class="card__background" style="background-color:${bgColors[index]}">
            <img class="card-image" src="/images/icon-${LowerCase}.svg" alt="work">
            </div>
        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">${title}</p>
            <img class="card-dots" src="/images/icon-ellipsis.svg" alt="three dots">
          </div>
          <div class="card__time">
            <p class="card__hour">${element.current}hrs</p>
            <p class="card__previous">Previous - ${element.previous}hs</p>
          </div>
        </div>
      </div>   
        `
       })
}