var audioContext = new AudioContext();

var canvas = document.getElementById("waveform_canvas");
var canvasContext = canvas.getContext("2d");
let waves = new SamplerManager();

window.onload = function() {
    resizeCanvas();
};

window.onresize = function() {
    resizeCanvas();
};

canvas.onwheel = function(event) {
    let wave = waves.list.find(x => x.isActive).wave;
    if(event.deltaY == -3) {
        wave.zoomIn();
    } else {
        wave.zoomOut();
    }
    wave.draw(canvas, canvasContext)
};

canvas.oncontextmenu = function (e) {
    e.preventDefault();
};

canvas.addEventListener('mousedown', function (e){
    let wave = waves.list.find(x => x.isActive).wave;
    if(e.button === 0){
        wave.surfingRight(canvas.clientWidth);
    }
    else if(e.button === 2){
        wave.surfingLeft(canvas.clientWidth);
    }
    wave.draw(canvas, canvasContext)
}, false);


function resizeCanvas(callback) {
    let waveformContainer = document.getElementById("waveform");
    canvas.setAttribute("width", waveformContainer.clientWidth);
    canvas.setAttribute("height", waveformContainer.clientHeight);

    for(let {wave} of waves.list) {
        wave.draw(canvas, canvasContext);
    }
}

document.getElementById("start_time").addEventListener('change', function() {
    let wave = waves.list.find(x => x.isActive).wave;
    wave.draw(canvas, canvasContext)
    wave.setStart(this.value, canvas.clientWidth);
});

document.getElementById("end_time").addEventListener('change', function() {
    let wave = waves.list.find(x => x.isActive).wave;
    wave.draw(canvas, canvasContext)
    wave.setEnd(this.value, canvas.clientWidth);
});

document.getElementById("add_sample").addEventListener('click', function() {
    let sampleName = document.getElementById("sample_name");
    if(sampleName.value === "") {
        return;
    }
    waves.add(sampleName.value, null);
    waves.renderList();
    sampleName.value = ""; 
});

function chooseFile() {
    let file_upload = document.getElementById("audio_file_upload");
    file_upload.click();
    file_upload.onchange = function(event) {
        let file = URL.createObjectURL(event.target.files[0]);
        getFileFromPath(file)
            .then(function(buffer) {
                let activeSample = waves.getList().find(x => x.isActive);
                let waveFormData = new Audio(buffer, audioContext, canvas.clientWidth);
                waves.addWaveform(activeSample.id, waveFormData);
                waveFormData.draw(canvas, canvasContext, 2);
                document.getElementById("end_time").setAttribute("max", buffer.duration)
                document.getElementById("start_time").setAttribute("max", buffer.duration)
            })
    }
}