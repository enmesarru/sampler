// const {SVG} = require('@svgdotjs/svg.js');

class Key {
    constructor(note, type) {
        this.note = note;

        this.colors = {
            "black": "#000",
            "white": "#FFF"
        };
        this.type = type;
        this.color = type ? this.colors.black : this.colors.white;
    }
}

class Piano {

    constructor(start_note_ = 0, end_note_ = 12, container_) {

        this.container = container_;
        this.start_note = start_note_;
        
        this.end_note = end_note_;

        this.key_count = (this.end_note - this.start_note) + 1; 

        /*
            0: white
            1: black
        */
        this.pattern = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0];

    }

    initialize() {
        this.keys = [];

        for(let i = 0; i < this.key_count; i++) {
            let note = i  + this.start_note;
            let key_index = note % this.pattern.length;

            let piano_key = new Key(note, this.pattern[key_index]);

            this.keys.push(piano_key);
        }
    }

    draw() {
        let svg = SVG().addTo(this.container);
        
        this.keys.forEach((key, index) => {
            if(key.type == 0) {
                svg.rect(6, 28).fill(key.color);
            } else {
                svg.rect(3, 14).fill(key.color);
            }
        });
        return svg;
    }
}

module.exports = {Key, Piano};