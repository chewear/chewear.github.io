function playVideo() {
    var videoElement = document.getElementById('videoPlayer');
    var buttonElement = document.querySelector('.play');

    if (videoElement) {
        if (videoElement.paused) {
            videoElement.play();
            if (buttonElement) {
                buttonElement.style.display = 'none';
            }
        } else {
            videoElement.pause();
            if (buttonElement) {
                buttonElement.style.display = 'flex';
            }
        }
    } else {
        console.error('Video element not found or it does not support the play/pause methods.');
    }

    if (!buttonElement) {
        console.error('Button element with class "play" not found.');
    }
}

function onDownloadClick() {
    const platformsElement = document.getElementById('platforms');
    platformsElement.classList.toggle('visible');
}

// document.getElementById('downloadAndroid').addEventListener('click', function(event) {
//     event.preventDefault();
//     window.location.href = 'download/EOTP.apk';  
// });

// document.getElementById('downloadWindows').addEventListener('click', function(event) {
//     event.preventDefault();
//     window.location.href = 'download/EOTPv1.4.zip';  
// });