var horaDigitada = 12;
var agora = new Date();

var hora = agora.getHours();


if (hora < 0 || hora >= 25){
    console.log('Horario Invalido!');
}else{console.log(`Agora são exatamente ${hora} horas.`);}

if (hora >= 24 && hora < 25 || hora < 6 ){
    console.log('Boa Madrugada!');
}else if (hora < 12){
    console.log('Bom Dia!');
}else if (hora < 18){
    console.log('Boa Tarde!');
}else if(hora < 24){
    console.log('Boa Noite!');
}
    

