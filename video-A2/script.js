document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector("#custom-video-player");
    const playPauseBtn = document.querySelector("#play-pause-btn");
    const playPauseImg = document.querySelector("#play-pause-img");
    const progressBarFill = document.querySelector("#progress-bar-fill");
    const progressBar = document.querySelector(".progress-bar");
    const fullscreenBtn = document.querySelector("#fullscreen-btn");
  
    video.removeAttribute("controls");

//   play and pasue function
    playPauseBtn.addEventListener("click", togglePlayPause);
    video.addEventListener("timeupdate", updateProgressBar);
    progressBar.addEventListener("click", seek);
    fullscreenBtn.addEventListener("click", goFullscreen); 
  
    function togglePlayPause() {
      if (video.paused || video.ended) {
        video.play();
        playPauseImg.src = "icons8-pause-64.png"; 
      } else {
        video.pause();
        playPauseImg.src = "icons8-play-64.png"; 
      }
    }
  
    // progress bar function
    function updateProgressBar() {
      const value = (video.currentTime / video.duration) * 100;
      progressBarFill.style.width = value + "%";
    }
  
    function seek(e) {
      const posX = e.offsetX;
      const progressBarWidth = progressBar.clientWidth;
      const seekTime = (posX / progressBarWidth) * video.duration;
      video.currentTime = seekTime;
    }
  
    function goFullscreen() {
        if (!document.fullscreenElement) {
          video.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    });