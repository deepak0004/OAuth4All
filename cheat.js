navigator.webkitGetUserMedia({ audio: true},
function (stream) {
    mediaStream = stream;
},
function (error) {
    console.error("Error trying to get the stream:: " + error.message);
});