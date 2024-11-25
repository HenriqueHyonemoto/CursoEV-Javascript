/*var pais = 'França';

console.log(`Vimemos no(a) ${pais}`);

if (pais == 'Brasil'){
    console.log('Você é do Brasil!');
}else{
    console.log('Você é de fora!');
}*/
function mostrapais(){
    var pais = document.getElementById('pais').value;
    var resultado = document.getElementById('resultado');
    pais = pais.toLowerCase();
    if (pais == 'brasil'){
        resultado.innerHTML = "<p>Você é Brasileiro!</p>"
    }else{
        resultado.innerHTML = "<p>Você é Estrangeiro!</p>"
    }
}


