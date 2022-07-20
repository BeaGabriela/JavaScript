function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (Fano.value.length == 0 || Number.parseInt(Fano.value) > ano) {
        window.alert(' [ERRO] Verifique os dados, e tente novamnete.')
    } else {
        var fsex = document.getElementsByName('radisex')
        var idade = ano - Number.parseInt(Fano.value)
        var genero = ''
        // var img = document.createElement('img')
        // img.setAttribute('id', 'foto') // Aqui cria uma tag imagem com o id = foto
        var img = document.getElementsById('foto')
        if (fsex[0].checked) {
            genero = 'um homem'
            if (idade >= 0 && idade < 10) {
               img.src = './img/bmenino.png'
            } else if (idade < 21) {
               img 
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        } else if (fsex[1].checked) {
            genero = 'uma mulher'
            if (idade >= 0 && idade < 10) {
                //Crianca
            } else if (idade < 21) {
                //Adolescnete
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }


}