let clockInterval = null 
const clock = document.getElementById('clock')
function ClockFun(){
    clockInterval = setInterval(()=>{
        const now = new Date()
        const hours = String(now.getHours()).padStart(2,'0')
        const mins = String(now.getMinutes()).padStart(2,'0')
        const secs = String(now.getSeconds()).padStart(2,'0')
        const meridiem = (hours > 12 ? 'PM' : 'AM')
        clock.textContent = `${hours}:${mins}:${secs} ${meridiem}`
    },1000)
}

window.onload = ClockFun();