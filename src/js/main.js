var audioContext = new AudioContext();

var canvas = document.getElementById("waveform_canvas");
var canvasContext = canvas.getContext("2d");
let waves = new SamplerManager();

window.onload = function() {
    resizeCanvas();
}

window.onresize = function() {
    resizeCanvas();
}

document.getElementById("start_time").addEventListener('change', function() {
    for(let {wave} of waves.list) {
        let [startCircle] = wave.getCircles();
        let value = (canvas.clientWidth * this.value) / wave.audioBuffer.duration;
        startCircle.set(value, 0)
        wave.draw(canvas, canvasContext)
        wave.setStart(this.value);
    }
})

document.getElementById("end_time").addEventListener('change', function() {
    for(let {wave} of waves.list) {
        let [startCircle, endTimeCircle] = wave.getCircles();
        // width * secondValue == perPixel * duration
        let value = (canvas.clientWidth * this.value) / wave.audioBuffer.duration;
        endTimeCircle.set(value, 0)
        wave.draw(canvas, canvasContext)
        wave.setEnd(this.value);
    }
})


function chooseFile() {
    let file_upload = document.getElementById("audio_file_upload");
    file_upload.click();
    file_upload.onchange = function(event) {
        let file = URL.createObjectURL(event.target.files[0]);
        getFileFromPath(file)
            .then(function(buffer) {
                let waveFormData = new Audio(buffer, audioContext, canvas.clientWidth);
                waves.add("Test", waveFormData)
                waveFormData.draw(canvas, canvasContext, 2);
                document.getElementById("end_time").setAttribute("max", buffer.duration)
                document.getElementById("start_time").setAttribute("max", buffer.duration)
            })
    }
}

canvas.onwheel = function(event) {
    for(let {wave} of waves.list) {
        if(event.deltaY == -3) {
            wave.zoomIn();
        } else {
            wave.zoomOut();
        }
        wave.draw(canvas, canvasContext)
    }
}

function resizeCanvas(callback) {
    let waveformContainer = document.getElementById("waveform");
    canvas.setAttribute("width", waveformContainer.clientWidth);
    canvas.setAttribute("height", waveformContainer.clientHeight);

    for(let {wave} of waves.list) {
        wave.draw(canvas, canvasContext);
    }
}