document.addEventListener("DOMContentLoaded", function() {
  // 选择 play-pause 按钮
  const playPauseButton = document.querySelector("#play-pause-btn");
  const playPauseImg = document.querySelector("#play-pause-img");
  const myVideo = document.querySelector("#custom-video-player");
  const progressBarFill = document.querySelector("#progress-bar-fill");
  const progressBar = document.querySelector(".progress-bar");
  const fullscreenButton = document.querySelector("#fullscreen-btn");

  // 添加事件监听器
  playPauseButton.addEventListener("click", togglePlayPause);
  myVideo.addEventListener("timeupdate", updateProgressBar);
  progressBar.addEventListener("click", seek);
  fullscreenButton.addEventListener("click", goFullscreen);
  myVideo.addEventListener("dblclick", goFullscreen); 

  // 播放/暂停功能
  function togglePlayPause() {
    if (myVideo.paused || myVideo.ended) {
      playPauseImg.src = "icons8-pause-64.png";
      myVideo.play();
    } else {
      playPauseImg.src = "icons8-play-64.png";
      myVideo.pause();
    }
  }

  // 更新进度条
  function updateProgressBar() {
    const progress = (myVideo.currentTime / myVideo.duration) * 100;
    progressBarFill.style.width = progress + "%";
  }

  // 调整视频进度
  function seek(e) {
    const progressBarWidth = progressBar.clientWidth;
    const clickX = e.offsetX;
    const duration = myVideo.duration;
    myVideo.currentTime = (clickX / progressBarWidth) * duration;
  }

  // 全屏功能
  function goFullscreen() {
    if (!document.fullscreenElement) {
      if (myVideo.requestFullscreen) {
        myVideo.requestFullscreen();
      } else if (myVideo.webkitRequestFullscreen) {
        myVideo.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
});


    // Not only did I make the navigation bar display according to the progress of the video,
    //  I also designed the video progress to be adjusted through the progress bar
