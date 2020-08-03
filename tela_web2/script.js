function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var f_ano = document.getElementById('txtano').value
    var p_result = document.getElementById('form')
    if (f_ano <= 0 || f_ano > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var f_sexo = document.getElementsByName('radsexo')
        var idade = ano - f_ano
        var genero = ''
        var img = document.getElementById('foto')
        if (f_sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.src = 'fotos-pessoas/bebe-menino.png'
            } else if (idade >= 10 && idade < 21) {
                img.src = 'fotos-pessoas/homem-jovem.png'
            } else if (idade >= 21 && idade < 50) {
                img.src = 'fotos-pessoas/homem-adulto.png'
            } else {
                img.src = 'fotos-pessoas/homem-idoso.png'
            }
        } else if (f_sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.src = 'fotos-pessoas/bebe-menina.png'
            } else if (idade >= 10 && idade < 21) {
                img.src = 'fotos-pessoas/mulher-jovem.png'
            } else if (idade >= 21 && idade < 50) {
                img.src = 'fotos-pessoas/mulher-adulta.png'
            } else {
                img.src = 'fotos-pessoas/mulher-idosa.png'
            }
        }
        p_result.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`
    }
}