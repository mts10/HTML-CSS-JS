function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 25){
                img.setAttribute('src', 'imgJovem.png')
            }else if(idade  >=26 && idade <50){
                img.setAttribute('src', 'imgAdulto.png')
            }else{
                img.setAttribute('src', 'imgIdoso.png')
            }
            
        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 25){
                img.setAttribute('src', 'imgJovemF.png')
            }else if(idade  >=26 && idade <50){
                img.setAttribute('src', 'imgAdulta.png')
            }else{
                img.setAttribute('src', 'imgIdosa2.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um <strong>${genero}</strong> com <strong>${idade}</strong> anos de idade.`
        res.appendChild(img)
        
    }
}