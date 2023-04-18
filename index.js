


const inputText = document.getElementById('input');

const api = {
    key: "7e3f21edee540e6110af347b55eb1ab2",
    base: "https://api.openweathermap.org/data/2.5/"

}

inputText.addEventListener('keypress', setValue)
function getData(query) {

    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(response => { DisplayData(response) })

}

function DisplayData(weather) {

    const countryName = document.getElementById('location')
    countryName.innerText = `${weather.name} ,${weather.sys.country}`

    const curTem = document.querySelector('main')
    curTem.innerHTML = `${Math.round(weather.main.temp)} <span>&#8451;</span>`;

    const des = document.getElementById('desc')
    des.innerText = weather.weather[0].main

    const min_max = document.getElementById('min_max_tem');
    min_max.innerHTML = `${Math.round(weather.main.temp_min)} <span>&#8451;</span> / ${Math.round(weather.main.temp_max)} <span>&#8451;</span>`

    const now = new Date();
    const curDate = document.getElementById('date');
    curDate.innerText = dateBuilder(now);
}

function setValue(evt) {
    if (evt.keyCode == 13) {
        getData(inputText.value);
    }

}

function dateBuilder(d) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"]

    const date = d.getDate()
    const day = days[d.getDay()]
    const month = months[d.getMonth()]
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}


