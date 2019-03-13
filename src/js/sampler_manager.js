function SamplerManager() {
    this.list = [];
}

SamplerManager.prototype = {
    add: function(name, wave) {
        this.list.push({
            id: this.list.length + 1,
            name,
            wave
        });
    },
    remove(id) {
        this.list = this.list.filter(function(object) {
            return object.id !== id;
        });
    },
    getList() {
        return this.list;
    }
}