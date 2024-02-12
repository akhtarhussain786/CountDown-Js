let daysItem = document.querySelector("#days");
let HoursItem = document.querySelector("#Hours");
let MinItem = document.querySelector("#Min");
let SecItem = document.querySelector("#Sec");


let countDown = () => {
    let futureDate = new Date ("17 jul 2024");
    let currentDate = new Date();
    let myDate = futureDate -  currentDate;

    ///console.log(myDate);

    let days = Math.floor(myDate / 1000 / 60 /60/24);
    let Hours =  Math.floor(myDate /1000/60/60) % 24;
    let Min  =  Math.floor(myDate /1000/60)%60;
    let Sec =  Math.floor(myDate /1000)%60;


    daysItem.innerHTML = days;
    HoursItem.innerHTML = Hours;
    MinItem.innerHTML = Min;
    SecItem.innerHTML = Sec;


}

countDown ()

setInterval(countDown,1000)