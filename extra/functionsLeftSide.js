/*
<h1 class="date" id="currentDate">Friday<span>September 12th</span></h1>
<h1 class="date" id="selectedDate">Friday<span>September 12th</span></h1>
*/

let fullDayArray = [`Luni`, `Marti`, `Miercuri`, `Joi`, `Vineri`, `Sambata`, `Duminica`];
let fullMonthArray //pt mai tarziu
function renderTodayText(){
    let todayText = document.getElementById(`currentDate`)
    todayText.addEventListener("click", () => backToToday());
    todayText.innerHTML=`<a class="clickable"> Astăzi, ${fullDayArray[dayStart(today.getDay(), today.getMonth() +1, today.getFullYear())]}, <span> ${today.getDay()} ${monthsArr[today.getMonth()+1]} ${today.getFullYear()} </span> </a>`
}

function renderSelectedDay(){
    let todayText = document.getElementById(`selectedDate`)
    todayText.addEventListener("click", () => backToToday());
    todayText.innerHTML=`<a class="clickable">${fullDayArray[dayStart(selectedDay, selectedMonth +1, selectedYear)]}, <span> ${selectedDay} ${monthsArr[selectedMonth+1]} ${selectedYear} </span> </a>`
}
