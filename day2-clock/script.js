const app = {
    init(){
        this.second = document.getElementById("second");
        this.minute = document.getElementById("minute");
        this.hour = document.getElementById("hour");
        setInterval(this.handleTimeFly, 1000);
    },
    handleTimeFly(){
        const time = new Date();
        this.second.style.transform = `rotate(${time.getSeconds() / 60 * 360 + 90}deg)`;
        this.minute.style.transform = `rotate(${time.getMinutes() / 60 * 360 + 90}deg)`;
        this.hour.style.transform = `rotate(${time.getHours() / 12 * 360 + 90}deg)`;
    }
}


window.addEventListener('load', app.init());
