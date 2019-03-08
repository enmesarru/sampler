var audioContext = new AudioContext();

var canvas = document.getElementById("waveform_canvas");
var canvasContext = canvas.getContext("2d");


window.onload = function() {
    resizeCanvas();
}

window.onresize = function() {
    resizeCanvas();
}

function resizeCanvas(callback) {
    let waveformContainer = document.getElementById("waveform");
    canvas.setAttribute("width", waveformContainer.clientWidth);
    canvas.setAttribute("height", waveformContainer.clientHeight);
}

function chooseFile() {
    let file_upload = document.getElementById("audio_file_upload");
    file_upload.click();
    file_upload.onchange = function(event) {
        let file = URL.createObjectURL(event.target.files[0]);
        getFileFromPath(file)
            .then(function(buffer) {
                let waveFormData = new Audio(buffer, audioContext);
                waveFormData.draw(canvas, canvasContext);
                waveFormData.setEnd(0.5);
                waveFormData.play();
            })
    }
}