const digital = document.querySelector(".digital");
const secondsHand = document.querySelector(".seconds");
const minutesHand = document.querySelector(".minutes");
const HoursHand = document.querySelector(".hours");

const updateDigital = () => {
    const now = new Date();
    digital.textContent = `${String(now.getHours()).padStart(2, "0")}:${String(
        now.getMinutes()
    ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
};

const updateAnalogic = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = (seconds / 60) * 360 + 90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg`;
    const minutes = now.getMinutes();
    const minutesDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    minutesHand.style.transform = `rotate(${minutesDegree}deg`;
    const hours = now.getHours();
    const hoursDegree = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
    HoursHand.style.transform = `rotate(${hoursDegree}deg`;
};

setInterval(() => {
    updateDigital();
    updateAnalogic();
}, 1000);
