let sayi1 = document.querySelector('#number1')
let sayi2 = document.querySelector('#number2')
let sonuc = document.querySelector('#result')

let topla = document.querySelector('#add')
let cikar = document.querySelector('#sub')
let carp = document.querySelector('#multiply')
let bol = document.querySelector('#divede')

topla.addEventListener('click', function(){
    sayi1 = parseFloat(document.querySelector('#number1').value)
    sayi2 = parseFloat(document.querySelector('#number2').value)
    sonuc.value = (sayi1 + sayi2).toFixed(2)
})

cikar.addEventListener('click', function(){
    sayi1 = parseFloat(document.querySelector('#number1').value)
    sayi2 = parseFloat(document.querySelector('#number2').value)
    sonuc.value = (sayi1 - sayi2).toFixed(2)
})

carp.addEventListener('click', function(){
    sayi1 = parseFloat(document.querySelector('#number1').value)
    sayi2 = parseFloat(document.querySelector('#number2').value)
    sonuc.value = (sayi1 * sayi2).toFixed(2)
})

bol.addEventListener('click', function(){
    sayi1 = parseFloat(document.querySelector('#number1').value)
    sayi2 = parseFloat(document.querySelector('#number2').value)
    sonuc.value = (sayi1 / sayi2).toFixed(2)
})