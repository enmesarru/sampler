function Audio(buffer, audioContext, canvasWidth) {
    this.audioBuffer = buffer;
    this.audioContext = audioContext;
    this.source = null;
    this.start = 0;
    this.end = this.audioBuffer.duration;
    this.zoom = 1;
    console.log(canvasWidth)
    this.startTimeCircle = new Circle(new Point(0, 0), "blue", 10);
    this.endTimeCircle = new Circle(new Point((canvasWidth * this.end) / this.end, 0), "yellow", 10);
}

Audio.prototype = {
    setStart: function(value) {
        this.start = value;
    },
    setEnd: function(value) {
        this.end =  value;
    },
    getCircles() {
        return [this.startTimeCircle, this.endTimeCircle];
    },
    zoomIn: function(value = 0.2) {
        if(this.zoom >= 5) {
            return;
        }
        this.zoom += value;
    },
    zoomOut: function(value = 0.2) {
        if(this.zoom <= 0.5) {
            return;
        }
        this.zoom -= value;
    },
    draw: function(canvas, canvasContext) {
        let lineWidth = canvas.clientWidth;
        let bufferLeftChannel = this.audioBuffer.getChannelData(0);
        // let lineOpacity = canvas.clientWidth / bufferLeftChannel.length;
        
        canvasContext.save();
        canvasContext.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        canvasContext.translate(0, canvas.height / 2);
    
        let totalLength = bufferLeftChannel.length;
        let blocks = Math.floor(totalLength / lineWidth);
        let gap = (canvas.clientWidth * this.zoom / lineWidth);
        
        this.startTimeCircle.draw(canvasContext);
        this.endTimeCircle.draw(canvasContext);

        canvasContext.fillStyle = "#ffffff";
        canvasContext.strokeStyle = '#eb6841';
        canvasContext.globalCompositeOperation = 'lighter';
        canvasContext.lineWidth = 1;

        for(let i = 0; i < lineWidth; i++) {
            let audioBufferKey = Math.floor(blocks * i);
            let x = i * gap;
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