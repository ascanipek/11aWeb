let startBtn = document.querySelector('#start')

let resetBtn = document.querySelector('#reset')
let timer
let ne = 0

startBtn.addEventListener('click', function(){
    if(ne == 0){
        let salise = parseInt(document.querySelector('#sl').innerHTML)
        let saniye = parseInt(document.querySelector('#sn').innerHTML)
        let dakika = parseInt(document.querySelector('#dk').innerHTML)
        timer = setInterval(function(){
            salise = salise + 1
            if(salise == 59){
                document.querySelector('#sl').innerHTML = 0
                saniye = saniye + 1
                document.querySelector('#sn').innerHTML = saniye
                salise = 0
            }
            else{
                document.querySelector('#sl').innerHTML = salise
            }
            if(saniye == 59){
                document.querySelector('#sn').innerHTML = 0
                dakika = dakika + 1
                document.querySelector('#dk').innerHTML = dakika
                saniye = 0
            }
        }, 16.8)
        ne = 1
        startBtn.innerHTML = 'Durdur'
        startBtn.classList.remove("btn-danger");
        startBtn.classList.add("btn-success");
    }// ne, if sonu
    else if(ne == 1){
        clearInterval(timer);
        ne = 0;
        startBtn.innerHTML = 'Başlat'
        startBtn.classList.remove("btn-success");
        startBtn.classList.add("btn-danger");
    }
})

resetBtn.addEventListener('click', function(){
    document.querySelector('#sl').innerHTML = 0
    document.querySelector('#sn').innerHTML = 0
    document.querySelector('#dk').innerHTML = 0
})
