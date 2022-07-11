setInterval(() => {
    let d = new Date();
    // console.log(d);
    let hrs = d.getHours();
    // console.log(hrs);
    let min = d.getMinutes();
    let sec = d.getSeconds();

    let hrrotation = 30*hrs + min/2 + sec/120;
    // console.log(hrrotation);
    let minrotation = 6*min + sec/10;
    let secrotation = 6*sec;
    
    let hour = document.getElementById('hour');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    hour.style.transform = `rotate(${hrrotation}deg)`;
    minutes.style.transform = `rotate(${minrotation}deg)`;
    seconds.style.transform = `rotate(${secrotation}deg)`;
}, 1000);

// console.log("Hello");