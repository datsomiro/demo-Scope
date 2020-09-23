 const handleClick = () => {

    const hourly = document.querySelector('.main_input--hourly');
     const hours = document.querySelector('.main_input--hours');
     const days = document.querySelector('.main_input--days');

    const hourlyValue = hourly.value;
    const hoursValue = hours.value;
    const daysValue = days.value;

    const salary = hourlyValue*hoursValue*daysValue;
    const message = document.querySelector('.result');
    message.textContent = ' Your salary is '+ salary ;
 }
document.querySelector("h1").style.textAlign = "center";
document.querySelector(".main_input").style.textAlign = "center";
document.querySelector("h2").style.fontSize = "2em"
document.querySelector("h2").style.textAlign = "center";
document.querySelector(".button").style.textAlign = "center";