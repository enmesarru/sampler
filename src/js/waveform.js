function Audio(buffer, audioContext) {
    this.audioBuffer = buffer;
    this.audioContext = audioContext;
    this.source = null;
    this.start = 0;
    this.end = this.audioBuffer.duration;
}

Audio.prototype = {
    setStart: function(value) {
        this.start = value;
    },
    setEnd: function(value) {
        this.end =  value;
    },
    draw: function(canvas, canvasContext) {
        var lines = canvas.clientWidth;
        let bufferLeftChannel = this.audioBuffer.getChannelData(0);
        // let lineOpacity = canvas.clientWidth / bufferLeftChannel.length;
    
        canvasContext.save();
        canvasContext.fillStyle = "#222";
        canvasContext.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        canvasContext.strokeStyle = '#299';
        canvasContext.globalCompositeOperation = 'lighter';
        canvasContext.translate(0, canvas.height / 2);
        canvasContext.lineWidth = 0.5;
    
        var totalLength = bufferLeftChannel.length;
        var blocks = Math.floor(totalLength / lines);
        var lineGap = (canvas.clientWidth / lines);
    
        for(let i = 0; i < lines; i++) {
            let audioBufferKey = Math.floor(blocks * i);
            let x = i * lineGap;
            let y = bufferLeftChannel[audioBufferKey] * canvas.clientHeight / 2;
            canvasContext.beginPath();
            canvasContext.moveTo(x, y);
            canvasContext.lineTo(x, (y * -1));
            canvasContext.stroke();
        }
        canvasContext.restore();
    },
    play: function() {
        this.source = this.audioContext.createBufferSource();
        this.source.buffer = this.audioBuffer;

        this.source.connect(this.audioContext.destination);
        this.source.start(this.audioContext.currentTime + this.start || this.audioContext.currentTime);
        this.source.stop(this.audioContext.currentTime + this.end);
    }
}