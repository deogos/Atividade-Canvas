const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');

//Redimensionar o canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Fundo
ctx.fillStyle = "#288887";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//Desenhando

//Marcas
    ctx.beginPath();
    ctx.moveTo(1000,600);
    ctx.lineTo(900,454)
    ctx.lineTo(1100,454)
    ctx.fillStyle = "#1c6c6b";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(1210,657);
    ctx.lineTo(1173,607);
    ctx.lineTo(1250,607);
    ctx.fillStyle = "#1c6c6b";
    ctx.fill();

    //Olhos

    ctx.beginPath();
    ctx.moveTo(794,657);
    ctx.lineTo(727,506);
    ctx.lineTo(609,584);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(1280,690);
    ctx.lineTo(1505,565);
    ctx.lineTo(1570,690);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();



    //Boca
    ctx.beginPath()
    ctx.moveTo(607,654);
    ctx.lineTo(958,789);
    ctx.lineTo(1411,787);
    ctx.strokeStyle = "#1c6c6b";
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(680,682);
    ctx.lineTo(679,732);
    ctx.lineTo(721,698);
    ctx.fillStyle = "#1c6c6b";
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(1143,788);
    ctx.lineTo(1160,815);
    ctx.lineTo(1181,788);
    ctx.fillStyle = "#1c6c6b";
    ctx.fill()











