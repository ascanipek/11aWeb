fetch('https://api.openweathermap.org/data/2.5/weather?q=eskisehir&appid=0a37e45a7316753630171c74608e2160&units=metric')
  .then(response => response.json())
  .then(data => console.log(data.main.feels_like));

