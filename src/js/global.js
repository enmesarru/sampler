import SamplerManager from './sampler_manager';
import Keyboard from './keyboard';
import { Key, Piano } from "./piano/piano_key";

class App_ {
    constructor() {
        this.audioContext = new AudioContext();
        this.canvas = document.getElementById("waveform_canvas");
        this.canvasContext = this.canvas.getContext("2d");
        this.waves = new SamplerManager();
        this.keyboard = Keyboard;

        this.piano = new Piano(0, 127, "midi_container");
        this.piano.initialize();
        this.piano.draw();


        // this.keyboard.initialize("midi_container", (elementId) =>  {
        //     const key = parseInt(document.getElementById(elementId).getAttribute("data-key-id"));
        //     for(let item of this.waves.getList()) {
        //        if(item.startNote <= key && key <= item.endNote) {
        //           if(item.wave) {
        //              item.wave.play(Math.abs(key - 128));
        //           }
        //        }
        // }});
    }
}

export default(new App_());
