let gunler = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
let aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
let sehir = document.querySelector('#sehir')

getData('Eskisehir')





























function getData(city){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=0a37e45a7316753630171c74608e2160&units=metric')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.querySelector('#today_temp').innerHTML = data.main.temp.toFixed(0)
        document.querySelector('#nem').innerHTML = '% ' + data.main.humidity
        document.querySelector('#windSpeed').innerHTML = data.wind.speed.toFixed(0) + ' km/s'
        document.querySelector('#yon').innerHTML = `<i class="wi wi-wind towards-${data.wind.deg}-deg"></i>`
        document.querySelector('#name').innerHTML = data.name
        let tarih = new Date(data.dt * 1000);
        document.querySelector('#day').innerHTML = gunler[tarih.getDay() - 1]
        document.querySelector('#date').innerHTML = tarih.getDate() + ' ' + aylar[tarih.getMonth()] + ' ' + tarih.getFullYear()
        let icon  = '<i class="wi wi-owm-' + data.weather[0].id + '" style="font-size: 80px; color: #20afda; margin-left: 20px;"></i>'
        // document.querySelector('#main_icon').innerHTML = icon
        let imgSrc = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'
        document.querySelector('#yeniicon').innerHTML = `<img src="${imgSrc}">`

        //  console.log( `<i class="wi wi-${iconClass}"></i>`)

    });
}

