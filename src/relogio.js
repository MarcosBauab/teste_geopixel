//Pegando a data, horas e minutos
var data = new Date()
var hora = data.getHours()
// Achando onde está o elemento que vai receber a hora e a imagem
var msg = document.getElementById('horas')
var imagem = document.getElementById('img')

// Ifs para trocar a imagem de acordo com a hora
// Se está de manhã, a hora ser menor do que 13,
// então a imagem será a da manhã e assim vai
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

// A função relógio é chamada a cada segundo, tomando a hora no momento atual
function relogio(){

    let data = new Date()
    hora = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()

    // Se o minuto ou segundo for menor do que 10, então o 0 é adicionado antes do número
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
// Definindo um intervalo de 1 segundo para chamar a função relogio()
window.setInterval ('relogio()',1000)