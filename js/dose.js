const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function playVideo() {
        var video = document.getElementById("video");
        video.play();
}

function pauseVideo() {
        var video = document.getElementById("video");
        video.pause();
}

function toggleFullscreen() {
        var video = document.getElementById("video");
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
}

function toggleVolume() {
        var video = document.getElementById("video");
        video.muted = !video.muted;
}

