function SamplerManager() {
    this.list = [];
}

SamplerManager.prototype = {
    add: function(name, wave) {
        this.list.push({
            id: this.list.length + 1,
            name,
            wave,
            isActive: false
        });
    },
    addWaveform(id, waveform) {
        let sampleItemIndex = this.list.findIndex(x => x.id === id);
        this.list[sampleItemIndex].wave = waveform;
    },
    remove(id) {
        this.list = this.list.filter(function(object) {
            return object.id !== id;
        });
    },
    getList() {
        return this.list;
    },
    getById(id) {
        return this.list.find(x => x.id === id);
    }, 
    renderList() {
        let listRoot = document.getElementById("sample_list");
        let settings = document.getElementById("settings");
        settings.classList.add("d-invisible");
        while(listRoot.firstChild) {
            listRoot.removeChild(listRoot.firstChild);
        }
        for(let item of this.list) {
            let listItem = document.createElement("div");
            listItem.className = "column col-2 sample_list_item";

            listItem.onclick = () => {
                let waveItem = this.getById(item.id)
                
                let activeItems = this.list.filter(item => item.isActive === true);
                for(let activeItem of activeItems) {
                    activeItem.isActive = false;
                }

                let activeDOMElements = document.querySelectorAll(".sample_list_item");
                for(let activeDOMElement of activeDOMElements) {
                    activeDOMElement.classList.remove("active");
                }
                item.isActive = true;
                listItem.classList.add("active");
                settings.classList.remove("d-invisible");
                settings.classList.add("d-visible");

                if(waveItem.wave != null) {
                    waveItem.wave.draw(canvas, canvasContext);
                } else {
                    canvasContext.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
                }
            };

            listItem.setAttribute("id", item.id);
            listItem.appendChild(document.createTextNode(item.name));
            listRoot.appendChild(listItem);
        }
    }
}