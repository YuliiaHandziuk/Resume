// common variables for all diagramms 
const pi = Math.PI;
const k = 2*pi/100;

function drawSkillCircle(id, text, max, fontSize) {
    let counter = 0;
    let i = setInterval(function(){
        drawCircle(id, text, counter, fontSize);
        counter++;
        if(counter === max) {
            clearInterval(i);
        }
    }, 40);
}

function drawCircle(id, text, x, fontSize) {
    let canvas = document.getElementById(id);
    let ctx = canvas.getContext('2d');

    let color = getColor(x);
    ctx.clearRect(0,0,170,95);

    //circle whole
    ctx.beginPath();
    ctx.arc(150, 75, 65, 0, x, false);
    ctx.strokeStyle = '#555555';
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath();

    // circle of level skill in per cent
    ctx.beginPath();
    ctx.arc(150, 75, 65, 0, x*k, false);
    ctx.strokeStyle = color;
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath();

    //text 
    ctx.beginPath();
    ctx.font = 'bold' + ' ' + fontSize + ' ' + 'Arial';
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.fillText(text,150,90);
    ctx.closePath();
}

//to set up color of circle - changed rgb(x,y,0)
function getColor(x) {
    x = x * 255/75;
    let y = x + 0;
    let color = 'rgb(' + y + ',165,0)';
    return color;
}


