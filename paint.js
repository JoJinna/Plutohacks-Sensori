const board = document.getElementById("board");
const context = board.getContext("2d");


let isDrawing = false;
const colorPicker = document.getElementById("colorPicker");
const brushSizeInput = document.getElementById("brushSize");
const clearButton = document.getElementById("clearButton");
const fillButton = document.getElementById("fillButton");
const downloadButton = document.getElementById("downloadButton");

board.addEventListener("mousemove", draw);
board.addEventListener("mouseup", () => {isDrawing = false; context.beginPath(); });
board.addEventListener("mousedown", () => {isDrawing = true });
 clearButton.addEventListener("click", clearCanvas);
function draw(e) {
    if (!isDrawing) return;
    context.lineWidth = brushSize.value;
    context.lineCap = "round";
    context.strokeStyle = colorPicker.value;
    
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    context.beginPath();
    context.moveTo(e.offsetX, e.offsetY);
}

function clearCanvas() {
    context.clearRect(0, 0, board.width, board.height);
}