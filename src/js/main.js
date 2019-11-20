import {getFileFromPath} from './filemanager';
import './keyboard';
import Audio from './waveform';

import '../css/normalize.css';
import '../css/spectre.min.css'
import '../css/main.css';
import '../css/keyboard.css';
import App from "./global";

window.onload = function() {
    resizeCanvas();
};

window.onresize = function() {
    resizeCanvas();
};

App.canvas.onwheel = function(event) {
    let wave = App.waves.list.find(x => x.isActive).wave;
    // ToDo: Normalizing Wheel Event
    if(event.deltaY == -3 || event.deltaY == -53) {
        wave.zoomIn();
    } else {
        wave.zoomOut();
    }
    App.wave.draw(App.canvas, App.canvasContext)
};

App.canvas.oncontextmenu = function (e) {
    e.preventDefault();
};

App.canvas.addEventListener('mousedown', function (e){
    let wave = App.waves.list.find(x => x.isActive).wave;
    if(e.button === 0){
        wave.surfingRight(App.canvas.clientWidth);
    }
    else if(e.button === 2){
        wave.surfingLeft(App.canvas.clientWidth);
    }
    wave.draw(App.canvas, App.canvasContext)
}, false);


function resizeCanvas(callback) {
    let waveformContainer = document.getElementById("waveform");
    App.canvas.setAttribute("width", waveformContainer.clientWidth);
    App.canvas.setAttribute("height", waveformContainer.clientHeight);

    for(let {wave} of App.waves.list) {
        wave.draw(App.canvas, App.canvasContext);
    }
}

document.getElementById("start_time").addEventListener('change', function() {
    let wave = App.waves.list.find(x => x.isActive).wave;
    wave.draw(App.canvas, App.canvasContext)
    wave.setStart(this.value, App.canvas.clientWidth);
});

document.getElementById("end_time").addEventListener('change', function() {
    let wave = App.waves.list.find(x => x.isActive).wave;
    wave.draw(App.canvas, App.canvasContext)
    wave.setEnd(this.value, App.canvas.clientWidth);
});

document.getElementById("add_sample").addEventListener('click', function() {
    let sampleName = document.getElementById("sample_name");
    if(sampleName.value === "") {
        return;
    }
    App.waves.add(sampleName.value, null);
    App.waves.renderList();
    sampleName.value = ""; 
});

document.getElementById("end_note").addEventListener('change', function() {
    let wave = App.waves.list.find(x => x.isActive);
    wave.endNote = parseInt(this.value);
});

document.getElementById("start_note").addEventListener('change', function() {
    let wave = App.waves.list.find(x => x.isActive);
    wave.startNote = parseInt(this.value);
});

document.getElementById("keyboard_switch_light").addEventListener('change', function() {
    let wave = App.waves.list.find(x => x.isActive);
    if(this.checked) {
        App.keyboard.changeKeyColor(wave.startNote, wave.endNote, wave.color);
    }
})

document.getElementById("chooseFile").addEventListener('click', function () {
    let file_upload = document.getElementById("audio_file_upload");
    file_upload.click();
    file_upload.onchange = function(event) {
        let file = URL.createObjectURL(event.target.files[0]);
        getFileFromPath(file, App)
            .then(function(buffer) {
                let activeSample = App.waves.getList().find(x => x.isActive);
                let waveFormData = new Audio(buffer, App.audioContext, App.canvas.clientWidth);
                App.waves.addWaveform(activeSample.id, waveFormData);
                waveFormData.draw(App.canvas, App.canvasContext, 2);
                document.getElementById("end_time").setAttribute("max", buffer.duration)
                document.getElementById("start_time").setAttribute("max", buffer.duration)
            })
    }
});