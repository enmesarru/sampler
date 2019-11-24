import { SVG } from '@svgdotjs/svg.js';

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
        /* (0 => white)
           (1 => black) */
        this.pattern = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0];
        this.keys = [];
    }

    initialize() {
        for(let i = 0; i < this.key_count; i++) {
            let note = i  + this.start_note; // start to inc from first note
            let key_index = note % this.pattern.length; // modular arithmetic

            let piano_key = new Key(note, this.pattern[key_index]);
            this.keys.push(piano_key);
        }
    }

    draw() {
        let svg = SVG().addTo(`#${this.container}`).id('keyboard')
            .width(1200)
            .height(28)
            .viewbox(0, 0, 1200, 28)
            .attr("preserveAspectRatio", "none");

        const key_prop = {
            white: {
                width: 20,
                height: 28
            },
            black: {
                width: 10,
                height: 14
            }
        };

        let white_key_x = 0;
        this.keys.forEach((key) => {
            if(key.type == 0) {
                svg.rect(key_prop.white.width, key_prop.white.height)
                    .fill(key.color).move(white_key_x, 0)
                    .stroke({color: '#000', width: 0.5})
                    .back();
                white_key_x += key_prop.white.width;
            } else {
                svg.rect(key_prop.black.width, key_prop.black.height)
                    .fill(key.color)
                    .move(white_key_x - (key_prop.white.width / 5), 0);
            }
        });
        return svg;
    }
}

module.exports = {Piano, Key};