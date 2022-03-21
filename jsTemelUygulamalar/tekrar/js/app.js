let foo = 0;
setInterval(function(){ // Belirtilen süre aralıklarında sonsuz döngü
    if(foo%2 == 0)
        document.querySelector('#baslik').style.color = '#ff88cc'
    else
        document.querySelector('#baslik').style.color = '#aacc99'

    foo++
}, 500)

setTimeout(function(){
    document.querySelector('#baslik').innerHTML += 'Merhaba'
})










