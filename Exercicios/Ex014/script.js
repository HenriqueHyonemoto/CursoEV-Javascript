var msg = document.getElementById('msg');
var img = document.getElementById('imagem');

var data = new Date().getHours();

var hora = data//19;



if (hora >= 0 && hora < 12){
    msg.innerHTML = "Bom Dia!";
    img.src = "image/day.png"
    document.body.style.background = "rgb(90, 153, 255);"
}else if (hora >= 12 && hora < 18){
    msg.innerHTML = "Boa Tarde!";
    img.src = "image/afternoon.png"
    document.body.style.background = "#ce4f15"
}else{
    msg.innerHTML = "Boa Noite!";
    img.src = "image/night.png"
    document.body.style.background = "#002e41"
}