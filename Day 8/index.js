const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hue = 0;
let width = 0;
let inc = 1;
context.strokeStyle = 'hsl(' + hue + ', 100%, 50%)';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = hue;

let drawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){
    if(!drawing) return;

    context.strokeStyle = 'hsl(' + hue + ', 100%, 50%)';
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if(hue >= 360) 
        hue = 0;
    
    if(context.lineWidth >= 100 || context.lineWidth <= 1) inc = -inc;
    context.lineWidth += inc;
}

canvas.addEventListener('mousedown', (e) => {
    drawing = true
    lastX = e.offsetX; 
    lastY = e.offsetY;
    context.lineWidth = 1;
    inc = 1;
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mouseout', () => drawing = false);