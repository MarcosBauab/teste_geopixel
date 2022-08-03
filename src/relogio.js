var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

var msg = document.getElementById('horas')
var imagem = document.getElementById('img')

if (hora < 13 ){
    img.src = './public/manha.png'
    document.getElementById('h').innerHTML = 'Bom dia!'
    document.getElementById('corpo').style.background = '#ebe3d6'
} else if (hora < 18) {
    document.getElementById('h').innerHTML = 'Boa tarde!'
    img.src = './public/fototarde.png'
    document.body.style.background = '#ac745b'
} else {
    document.getElementById('h').innerHTML = 'Boa noite!'
    img.src = './public/fotonoite.png'
    document.body.style.background = '#002c65'
}
function relogio(){
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
if (min < 10){
    if( seg < 10 ){
        msg.innerHTML = (`Agora são ${hora}:`+`0${min}:0${seg}`)
    } else {
        msg.innerHTML = (`Agora são ${hora}:`+`0${min}:${seg}`)
    }
} else {
    if( seg < 10 ){
        msg.innerHTML = (`Agora são ${hora}:`+`${min}:0${seg}`)
    } else {
        msg.innerHTML = (`Agora são ${hora}:`+`${min}:${seg}`)
    }
}


}
window.setInterval ('relogio()',1000)