document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector("#custom-video-player");
    const playPauseBtn = document.querySelector("#play-pause-btn");
    const playPauseImg = document.querySelector("#play-pause-img");
    const progressBarFill = document.querySelector("#progress-bar-fill");
    const progressBar = document.querySelector(".progress-bar");
    const fullscreenBtn = document.querySelector("#fullscreen-btn");
    const fullscreenImg = document.querySelector("#fullscreen-img");
  
    video.removeAttribute("controls");

//   play and pasue function
    playPauseBtn.addEventListener("click", togglePlayPause);
    video.addEventListener("timeupdate", updateProgressBar);
    progressBar.addEventListener("click", seek);
    fullscreenBtn.addEventListener("click", toggleFullscreen);
  
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
  
    
    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
          video.msRequestFullscreen();
        }
        fullscreenImg.src = "icons8-exit-fullscreen-64.png"; // 假设您有一个退出全屏的图标
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
          document.msExitFullscreen();
        }
        fullscreenImg.src = "icons8-fullscreen-64.png"; // 恢复到全屏图标
      }
    }
  });
  
  

