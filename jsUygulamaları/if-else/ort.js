let btn = document.querySelector('#btn')


btn.addEventListener('click', function(){
    let sinavBir = parseInt(document.querySelector('#sinavBir').value)
    let sinavIki = parseInt(document.querySelector('#sinavIki').value)
    let performans = parseInt(document.querySelector('#performans').value)
    let odev = parseInt(document.querySelector('#odev').value)

    let ort = sinavBir * 0.25 + sinavIki * 0.25 + performans * 0.4 + odev * 0.1

    let sonuc

    if(ort < 50)
        sonuc = 'Not: 1, Durum: Kaldı'
    else if(ort >= 50 && ort < 55)
        sonuc = 'Not: 2, Durum: Geçti'
    else if(ort >= 55 && ort < 70)
        sonuc = 'Not: 3, Durum: Geçti'
    else if(ort >= 70 && ort < 85)
        sonuc = 'Not: 4, Durum: Geçti'
    else if(ort >= 85)
        sonuc = 'Not: 5, Durum: Geçti'

    document.querySelector('#sonucKutusu').style.display = 'block'
    document.querySelector('#ort').innerHTML = ort
    document.querySelector('#sonuc').innerHTML = "<b class='text-danger'>" + sonuc + '</b>'
   


    // alert(ort)
})  