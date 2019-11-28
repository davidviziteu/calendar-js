let today = new Date();
let selectedMonth = today.getMonth();
let selectedDay = today.getDay();
let selectedYear = today.getFullYear();

let weekDayArr = [`pune + 1`, `Lu`, `Ma`, `Mi`, `Jo`, `Vi`, `Sa`, `Du`];//[`Luni`, `Marti`, `Miercuri`, `Joi`, `Vineri`, `Sambata`, `Duminica`];

let monthsArr = [`pune + 1`, `Ian`, `Feb`, `Mar`, `Apr`, `Mai`, `Iun`, `Iul`, `Aug`, `Sep`, `Oct`, `Noi`, `Dec`];


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
    for(let i = 1; i <= 12; ++i){
        let li = document.createElement("li");
        let a = document.createElement("a");
        li.className = `clickable` //era inainte "a" aici in loc de li
        li.innerHTML = `<a id="${i}">${monthsArr[i]}</a>`
        
        //a.innerHTML = monthsArr[i];
        if(i == today.getMonth()+1 && selectedYear == today.getFullYear()){
            //a.className = "today";
            //a.id = `${i}`;
            li.innerHTML = `<a id="${i}" class="today">${monthsArr[i]}</a>`
        }

        li.addEventListener("click", () => styleSelectedMonth(i));
        li.addEventListener("click", () => renderDays(i - 1, 2019));
        //li.appendChild(a);
        mLi.appendChild(li);
    }
    
}

let lastStyled; //ca sa stiu la ce luna sa sterg id-ul "selected" cand selectez alta
console.log(lastStyled)

//sa mi fut una cat mi o luat sa fac cacatu asta de functie cu css ul altcuiva
function styleSelectedMonth(M){ 
    toBeStyled = document.getElementById(`${M}`);
    console.log(`to be styled: ${toBeStyled}, M = ${M}, selectedMonth = ${selectedMonth}`)
    if((M != selectedMonth + 1) || selectedYear != today.getFullYear()){
        console.log(`styling`)
        toBeStyled.id = `selected`;
        if(lastStyled == undefined){
            console.log(`undef`);
            lastStyled = toBeStyled; 
        }
        else {
            lastStyled.id = ``;
            lastStyled = toBeStyled;
        }
    }
    else{
        console.log(`today is already styled`);
        if(lastStyled != undefined){
            lastStyled.id=``;
            }
    }   
}

//date render
function renderDays(M, Y){
    ++M;
    let dLi = document.getElementById("dayss");
    dLi.innerHTML = ``;
    let start = dayStart(1, M, Y);
    for(let i = 1 ; i <= daysInMonth(M, Y) + start; ++i){
        let li = document.createElement("li");
        let a = document.createElement("a");
        if(start >= i){
            a.innerHTML = ``;
            a.className = `nohover`;
        }
        else a.innerHTML = `${i - start}`;
        if((i - start) == today.getDate() && M == today.getMonth() + 1)
            a.id = `today`;
        a.addEventListener("click", () => selectDay(i - start));
        li.appendChild(a);
        document.getElementById("dayss").appendChild(li);
    }
}

//date picker
let t = selectedYear;
function yearChange(){
    document.getElementById("mm").innerHTML = "muie moscu";

}

function daysInMonth (month, year) { 
    return new Date(year, month, 0).getDate(); 
} 

function dayStart(day, month, year){  //primeste luni indexate incepand cu 1
    --month;
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

function selectDay(D){
    if(D>0){
    selectedDay=D;
    alert(`you selected ${selectedDay}.${selectedMonth + 1}.${selectedYear}`)
    }
    else alert(`o shit`);
}