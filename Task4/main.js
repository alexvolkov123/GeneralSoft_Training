function time() {
    const hoursArrow = document.querySelector('.clock_hour');
    const minutesArrow = document.querySelector('.clock_minute');
    const secondsArrow = document.querySelector('.clock_second');
    const degrees = 6;

    setInterval(()=> {
        const date = new Date();

        const hours = date.getHours() * 30;
        const minutes = date.getMinutes() * degrees;
        const seconds = date.getSeconds() * degrees;

        hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`;
        minutesArrow.style.transform = `rotateZ(${minutes}deg)`;
        secondsArrow.style.transform = `rotateZ(${seconds}deg)`;
    }, 0)
}
time();