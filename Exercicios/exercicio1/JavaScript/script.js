function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
// var hora = data.getHours()
var hora= 20
msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora< 12){
        //BOM DIA
        img.src = './img/manha.png'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = './img/tarde.png'
    } else{
        //Boa noite 
        img.src = './img/noite .png'
    }
}