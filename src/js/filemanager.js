function request(method, url, response_type) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = response_type ? response_type : "";
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}

function getFileFromPath(path) {
    return new Promise(function (resolve, reject) {
        request("GET", path, "arraybuffer")
        .then(function(e) {
            audioContext.decodeAudioData(e.target.response)
                .then(function (buffer) {
                    resolve(buffer);
                }).catch(function (error) {
                    reject(error);
                })
        })
    })
}