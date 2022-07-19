function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (Fano.value.length == 0 || Number.parseInt(Fano.value) > ano){
        window.alert(' [ERRO] Verifique os dados, e tente novamnete.')
            } else{
               var fsex = document.getElementsByName('radisex')
               var idade = ano - Number.parseInt(Fano.value)
               var genero = ''
               
            }


}