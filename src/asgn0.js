// Retrieve <canvas> element <- (1)
var height = 400;
var width = 400;
const drawButton = document.getElementById("draw");
drawButton.addEventListener("click", handleDrawEvent);
const drawOpButton = document.getElementById("drawop");
drawOpButton.addEventListener("click", handleDrawOperationEvent);

const v1xcoord = document.getElementById("v1xcoord");
const v1ycoord = document.getElementById("v1ycoord"); 
const v2xcoord = document.getElementById("v2xcoord");
const v2ycoord = document.getElementById("v2ycoord"); 
const opselect = document.getElementById("opselect");
const scalar = document.getElementById("scalar");

const canvas = document.getElementById('example');
if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
}

// Get the rendering context for 2DCG <- (2)
var ctx = canvas.getContext('2d');

// DrawRectangle.js -> asgn0.js
function main() {
    // Draw a blue rectangle <- (3)
    // ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'; // Set a blue color
    // ctx.fillRect(120, 10, 150, 150); // Fill a rectangle with the color
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);
 }

 function drawVector(v, color) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(width/2, height/2);
    ctx.lineTo(width/2+(v.elements[0]*20), height/2-(v.elements[1]*20));
    ctx.stroke();
 }

 function clearCanvas() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);
 }

 function handleDrawEvent() {
    clearCanvas();
    var v1 = new Vector3();
    v1.elements[0] = v1xcoord.value;
    v1.elements[1] = v1ycoord.value;
    v1.elements[2] = 0;
    var v2 = new Vector3();
    v2.elements[0] = v2xcoord.value;
    v2.elements[1] = v2ycoord.value;
    v2.elements[2] = 0;
    drawVector(v1, "red");
    drawVector(v2, "blue");
 }

 function handleDrawOperationEvent() {
    clearCanvas();
    var v1 = new Vector3();
    v1.elements[0] = v1xcoord.value;
    v1.elements[1] = v1ycoord.value;
    v1.elements[2] = 0;
    var v2 = new Vector3();
    v2.elements[0] = v2xcoord.value;
    v2.elements[1] = v2ycoord.value;
    v2.elements[2] = 0;
    drawVector(v1, "red");
    drawVector(v2, "blue");
    v3 = new Vector3();
    v4 = new Vector3();
    if (opselect.value == "add") {
        v3.set(v1.add(v2));
    } else if (opselect.value == "subtract") {
        v3.set(v1.sub(v2));
    } else if (opselect.value == "multiply") {
        v3.set(v1.mul(scalar.value));
        v4.set(v2.mul(scalar.value));
    } else if (opselect.value == "divide") {
        v3.set(v1.div(scalar.value));
        v4.set(v2.div(scalar.value));
    } else if (opselect.value == "anglebtwn") {
        console.log("Angle: " + (180/Math.PI)*(Math.acos(Vector3.dot(v1, v2) / (v1.magnitude()*v2.magnitude()))));
    } else if (opselect.value == "area") {
        v3.set(Vector3.cross(v1, v2));
        console.log("Area of the triangle: " + v3.magnitude()/2);
    } else if (opselect.value == "magnitude") {
        console.log(v1.magnitude());
        console.log(v2.magnitude());
    } else if (opselect.value == "normalize") {
        v3.set(v1.normalize());
        v4.set(v2.normalize());
    }
    drawVector(v3, "green");
    drawVector(v4, "green");
 } 