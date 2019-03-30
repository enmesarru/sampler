function Audio(buffer, audioContext, canvasWidth) {
    this.audioBuffer = buffer;
    this.audioContext = audioContext;
    this.source = null;
    this.start = 0;
    this.end = this.audioBuffer.duration;
    this.zoom = 1;
    this.surfing = 10;
    this.canvasWidth = canvasWidth;
    this.startTimeCircle = new Circle(new Point(0, 0), "#ffa700", 10);
    this.endTimeCircle = new Circle(new Point((canvasWidth * this.end) / this.end, 0), "#0057e7", 10);
}

Audio.prototype = {
    setStart: function(value, width) {
        this.start = parseFloat(value);
        if(this.start > this.end) {
            return;
        }
        let perPixel = (width * this.zoom * this.start) / this.audioBuffer.duration;
        this.startTimeCircle.set(perPixel, 0);
    },
    setEnd: function(value, width) {
        this.end = parseFloat(value);
        if(this.end  < this.start) {
            return;
        }
        // width * zoomValue * secondValue == perPixel * duration
        let perPixel = (width * this.zoom * this.end) / this.audioBuffer.duration;
        this.endTimeCircle.set(perPixel, 0);
    },
    zoomIn: function(value = 0.2) {
        if(this.zoom >= 5) {
            return;
        }
        this.zoom += value;
        this.setStart(this.start, this.canvasWidth);
        this.setEnd(this.end, this.canvasWidth);
    },
    zoomOut: function(value = 0.2) {
        if(this.zoom <= 0.5) {
            return;
        }
        this.zoom -= value;
        this.setStart(this.start, this.canvasWidth);
        this.setEnd(this.end, this.canvasWidth);
    },
    surfingRight: function(width) {
        this.surfing += 20000;
        let newDuration = ((this.audioBuffer.length - this.surfing) * this.audioBuffer.duration) / this.audioBuffer.length;
        let durationForCutting = newDuration - this.audioBuffer.duration;
        this.setStart(durationForCutting, width);
        this.setEnd(newDuration, width);
    },
    surfingLeft: function(width) {
        this.surfing -= 20000;
        /* equation => 
            audiobuffer_length(a)    ---------->   duration(c)
            (audiobuffer_length - surfing)(b) -->  new_duration
            ------------------------------------------------
            new_duration = (b * c) / a
        */
        let newDuration = ((this.audioBuffer.length - this.surfing) * this.audioBuffer.duration) / this.audioBuffer.length;
        let durationForCutting = newDuration - this.audioBuffer.duration;
        this.setStart(durationForCutting, width);
        this.setEnd(newDuration, width);
    },
    draw: function(canvas, canvasContext) {
        let lineWidth = canvas.clientWidth;
        let bufferLeftChannel = this.audioBuffer.getChannelData(0);

        canvasContext.save();
        canvasContext.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        canvasContext.translate(0, canvas.height / 2);
    
        let totalLength = bufferLeftChannel.length;
        let blocks = Math.floor(totalLength / lineWidth);
        let gap = (canvas.clientWidth * this.zoom / lineWidth);

        this.startTimeCircle.draw(canvasContext);
        this.endTimeCircle.draw(canvasContext);

        canvasContext.fillStyle = "#ffffff";
        canvasContext.strokeStyle = '#CC243A';
        canvasContext.globalCompositeOperation = 'lighter';
        canvasContext.lineWidth = 1;

        for(let i = 0; i < lineWidth; i++) {
            let audioBufferKey = Math.floor(blocks * i);
            let x = i * gap;
            let y = bufferLeftChannel[audioBufferKey +   this.surfing] * canvas.clientHeight / 2;
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

function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype = {
    getX: function() {
        return this.x;
    },
    getY: function() {
        return this.y;
    }
}

function Circle(point, color, radius) {
    this.point = point;
    this.color = color;
    this.isDragging = false;
    this.radius = radius;
}

Circle.prototype = {
    set(x, y) {
        this.point = new Point(x, y);
    },
    draw: function(canvasContext) {
        canvasContext.fillStyle = this.color;
        canvasContext.beginPath();
        canvasContext.arc(this.point.getX(), this.point.getY(), this.radius, 0, 2 * Math.PI);
        canvasContext.stroke();
        canvasContext.fill();
    },
}