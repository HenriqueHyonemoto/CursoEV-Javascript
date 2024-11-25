function verificar() {
    var anoAtual = new Date().getFullYear();
    var ano = Number(document.getElementById('ano').value);
    var res = document.getElementById('res');
    if (ano.length == 0 || ano > anoAtual) {
        window.alert('[ERRO] Insira uma data valida!');
    } else {
        var sex = document.getElementsByName('sex');
        var idade = anoAtual - ano;
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        alert(idade);
        if (sex[0].checked){
            genero = 'Masculino';
            if(idade >= 0 && idade <10){
                img.setAttribute('src','image/crianca-m.png')
            }else if (idade < 18){
                img.setAttribute('src','image/adolescente-m.png')
            }else if (idade < 60){
                img.setAttribute('src','image/adulto-m.png')
            }else{
                img.setAttribute('src','image/idoso-m.png')
            }
        } else if (sex[1].checked){
            genero = 'Feminino';
            if(idade >= 0 && idade <10){
                img.setAttribute('src','image/crianca-f.png')
            }else if (idade < 18){
                img.setAttribute('src','image/adolescente-f.png')
            }else if (idade < 60){
                img.setAttribute('src','image/adulto-f.png')
            }else{
                img.setAttribute('src','image/idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos uma pessoa de ${idade} anos, do sexo ${genero}<br>`
        res.appendChild(img);
    }

}