
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function updateProgressBars() {
    // Sample progress values
    const todayProgress = 40;
    const monthProgress = 50;
    const yearProgress = 60;

    document.getElementById('today-progress').textContent = `${todayProgress}%`;
    document.getElementById('month-progress').textContent = `${monthProgress}%`;
    document.getElementById('year-progress').textContent = `${yearProgress}%`;

    document.getElementById('today-bar').style.width = `${todayProgress}%`;
    document.getElementById('month-bar').style.width = `${monthProgress}%`;
    document.getElementById('year-bar').style.width = `${yearProgress}%`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    updateProgressBars();
    setInterval(updateClock, 1000);
});
