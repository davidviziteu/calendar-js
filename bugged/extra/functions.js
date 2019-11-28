let today = new Date();
let selectedMonth = today.getMonth();
let selectedDay = today.getDay();

let selectedYear = today.getFullYear();
let weekDayArr = [`pune + 1`, `Lu`, `Ma`, `Mi`, `Jo`, `Vi`, `Sa`, `Du`];//[`Luni`, `Marti`, `Miercuri`, `Joi`, `Vineri`, `Sambata`, `Duminica`];

let monthsArr = [`Ian`, `Feb`, `Mar`, `Apr`, `Mai`, `Iun`, `Iul`, `Aug`, `Sep`, `Oct`, `Noi`, `Dec`];
//year & buttons render

function renderYear(Y){
    let y = document.getElementById("yearr");
    y.innerHTML = `<a id="prevY" class="clickable">- </a>    <a id="mm" class="clickable">  ${Y}  </a><a id="nextY" class="clickable"> +</a>`
    document.getElementById("mm").addEventListener("click", () => yearChange());
    document.getElementById(`prevY`).addEventListener("click", () => prevYear());
    document.getElementById(`nextY`).addEventListener("click", () => nextYear());

}

//months render
function renderMonths(){
    mLi = document.getElementById("monthsList")
    mLi.innerHTML=``;
    for(let i = 0; i < 12; ++i){
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.className = `clickable`
        a.innerHTML=monthsArr[i];
        //li.link
        if(i == today.getMonth() && selectedYear == today.getFullYear())
            a.id="today";
        else a.id = i;
        a.addEventListener("click", () => renderDays(i + 1, 2019));
        li.appendChild(a);
        mLi.appendChild(li);
    }
}


//date render
function renderDays(M, Y){
    styleSelectedMonth(M);
    let dLi = document.getElementById("dayss");
    dLi.innerHTML = ``;
    let start = dayStart(1, M, Y);
    for(let i = 1 ; i < daysInMonth(M, Y) + start; ++i){
        let li = document.createElement("li");
        let a = document.createElement("a");
        if(start >= i){
            a.innerHTML = ``;
          //  a.className = `nohover`;
        }
        else a.innerHTML = `${i - start}`;
        
        if((i - start) == today.getDate() && M == today.getMonth() && Y == today.getFullYear()){
            a.id = `today`;
            
        }
        li.appendChild(a);
        document.getElementById("dayss").appendChild(li);
    }
    console.log(Y);
            console.log(M);
}

function styleSelectedMonth (M){

}

//date picker
function yearChange(){
    document.getElementById("mm").innerHTML = "muie moscu";
}

function daysInMonth (month, year) { 
    return new Date(year, month, 0).getDate(); 
} 

function dayStart(day, month, year){
    let d = new Date(year, month, day);
    let val = d.getDay();
    if(val == 0)
        return 6;
    return --val;
}

function backToToday(){
    renderYear(today.getFullYear())
    renderMonths();
    renderDays(today.getMonth(), today.getFullYear());
    selectedYear = today.getFullYear();
    selectedMonth = today.getMonth();
}

//year changer
function nextYear(){
    console.log(`im alive`);
    ++selectedYear;
    document.getElementById("mm").innerHTML = `${selectedYear}`;
    renderMonths();
    renderDays(selectedMonth, selectedYear);
}

function prevYear(){
    --selectedYear;
    document.getElementById("mm").innerHTML = `${selectedYear}`;
    renderMonths();
    renderDays(selectedMonth, selectedYear);
}