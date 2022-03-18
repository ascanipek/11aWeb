let screen = document.querySelector('#ekran')
let firstNumber = null
let res = null
let islem = null
function getNumber(el){
    screen.innerHTML += el.innerHTML
}

function deleteScr(){
    screen.innerHTML = ''
}

function add(){ // toplama
    firstNumber = parseFloat(screen.innerHTML)
    islem = '+'
    screen.innerHTML = ''
}

function extract(){ // çıkarma
    firstNumber = parseFloat(screen.innerHTML)
    islem = '-'
    screen.innerHTML = ''
}

function result(){ //eşittir
    let secondNumber = parseFloat(screen.innerHTML)

    if(islem == '+')
        res = firstNumber + secondNumber
    else if(islem == '-')
        res = firstNumber - secondNumber

    screen.innerHTML = res
}

function changeSignal(){
    let sayi = parseFloat(screen.innerHTML)
    screen.innerHTML = sayi * -1
}