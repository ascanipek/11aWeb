// DEĞİŞKEN TANIMLAMA
var number = 10
var name = "Abdullah"
let numberTwo = 10
console.log(number == numberTwo)
let nameTwo = "Enes"
const pi = 3.14
console.log(3.14 * 4)
// OPERATÖRLER
// 1. Aritamtik Op.
/*
    + : toplama
    - : çıkarma
    * : çarpma
    / : bölme
    % : mod alma

*/
// 2. Mantıksal Op.
/*
    && : ve
    || : veya
    ! : değil

/*

// 3. Karşılaştırma Op.
/*
    <, >, <=, >=
    ==  : Eşit mi?
    === : Eşit mi, tipi de mi aynı?
    !=  : Farklı mı?
*/

// VERİ TİPLERİ

/*
    primitive / ilkel
    sayısal veriler => Tam Sayı => integer (int), Kesirli Sayılar => float
    metinsel => string
    boolen => true / false
    dizi => [1,2,3, "a", "b", 3.14]

    modern veri tipleri
    nesne
*/

let baslik = document.querySelector('#baslik')
let buton = document.querySelector('#buton')

buton.addEventListener("click", function(){
    baslik.innerHTML = 'Merhaba'
})

baslik.addEventListener("click", function(){
    baslik.innerHTML = 'Selam'
})

let input = document.querySelector('#giris')
let sonuc = document.querySelector('#sonuc')


input.addEventListener('input', function(){
    sonuc.innerHTML = input.value
})

document.querySelector('#renk1').addEventListener('click', function(){
    let color = this.style.backgroundColor
    document.body.style.backgroundColor = color
})

document.querySelector('#renk2').addEventListener('click', function(){
    let color = this.style.backgroundColor
    document.body.style.backgroundColor = color
})

document.querySelector('#renk3').addEventListener('click', function(){
    let color = this.style.backgroundColor
    document.body.style.backgroundColor = color
})

document.querySelector('#renk4').addEventListener('click', function(){
    let color = this.style.backgroundColor
    document.body.style.backgroundColor = color
})

document.querySelector('#renk5').addEventListener('click', function(){
    let color = this.style.backgroundColor
    document.body.style.backgroundColor = color
})

document.querySelector('#renk12').addEventListener('click', function(){
    let color = this.style.backgroundColor
    document.body.style.backgroundColor = color
})


