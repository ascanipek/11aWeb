let artirButonu = document.querySelector('#artir')
let azaltButonu = document.querySelector('#azalt')
let resetButonu = document.querySelector('#reset')


artirButonu.addEventListener('click', function(){
    document.querySelector('#sayi').innerHTML = parseInt(document.querySelector('#sayi').innerHTML) + 1
})

azaltButonu.addEventListener('click', function(){
    document.querySelector('#sayi').innerHTML = parseInt(document.querySelector('#sayi').innerHTML) - 1
})

resetButonu.addEventListener('click', function(){
    document.querySelector('#sayi').innerHTML = 0
})