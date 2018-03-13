
let x= prompt('Введите координату "X"');
let y= prompt('Введите координату "Y"');
x *= 100;
y *= 100;
let distToPointInR = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
if (distToPointInR <= 100)
    distToPointInR = 1
else
    distToPointInR = 2;
let distToPointInL = x + y;
if (x <= 0 && y <= 0 && distToPointInL >= -200)
    distToPointInL = 1
else
    distToPointInL = 2;
if (distToPointInR === 1 && distToPointInL === 1)
    alert(" Точка принадлежит обоим множествам ");
if (distToPointInR === 1 && distToPointInL === 2)
    alert(' Точка принадлежит только множеству "A"');
if (distToPointInR === 2 && distToPointInL === 1)
    alert(' Точка принадлежит только множеству "Б"');
if (distToPointInR === 2 && distToPointInL === 2)
    alert(' Точка не принадлежит ни одному из множеств');
x+=250;
y=250-y;
function draw() {
    let canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(0, 250);
        ctx.lineTo(500, 250);
        ctx.moveTo(250, 0);
        ctx.lineTo(250, 500);
        ctx.moveTo(50, 250);
        ctx.lineTo(250, 450);
        ctx.lineTo(250, 250);
        let arrowX= new Path2D();
        arrowX.moveTo(500, 250);
        arrowX.lineTo(480, 230);
        arrowX.lineTo(480, 270);
        ctx.fill(arrowX);
        let arrowY=new Path2D();
        arrowY.moveTo(250, 0);
        arrowY.lineTo(230, 20);
        arrowY.lineTo(270, 20);
        ctx.fill(arrowY);
        let i=50;
    do{
        ctx.moveTo(i, 245);
        ctx.lineTo(i, 255);
        i+=50;
    }
    while(i<=450);
    i=50;
        do{
            ctx.moveTo(245, i);
            ctx.lineTo(255, i);
            i+=50;
        }
        while(i<=450);
        ctx.font = "20px Times New Roman";
        ctx.fillStyle = "Black";
        ctx.fillText("A", 350, 150);
        ctx.moveTo(345, 155);
        ctx.lineTo(300, 200);
        ctx.fillText("B", 100, 400);
        ctx.moveTo(115, 385);
        ctx.lineTo(160, 340);
        ctx.fillText("1", 350, 235);
        ctx.fillText("-1", 130, 235);
        ctx.fillText("1", 260, 145);
        ctx.fillText("-1", 260, 365);
        ctx.fillText("2", 450, 235);
        ctx.fillText("-2", 30, 235);
        ctx.fillText("2", 260, 45);
        ctx.fillText("-2", 260, 465);
        ctx.fillStyle = '#FFDAB9';
        ctx.fill();
        ctx.fillStyle = 'rgba(255, 228, 181,0.5)';
        let circle = new Path2D();
        circle.arc(250, 250, 100, 0, Math.PI * 2, true);
        ctx.fill(circle);
        ctx.stroke(circle);
        let point = new Path2D();
        point.arc(x, y, 2, 0, Math.PI * 2, true);
        ctx.fillStyle = '#FF6347';
        ctx.fill(point);
        ctx.closePath();
        ctx.stroke();
    }
}
