document.addEventListener("DOMContentLoaded", function() {
  const playPauseButton = document.querySelector("#play-pause-btn");
  const playPauseImg = document.querySelector("#play-pause-img");
  const myVideo = document.querySelector("#custom-video-player");
  const progressBarFill = document.querySelector("#progress-bar-fill");
  const progressBar = document.querySelector(".progress-bar");
  const fullscreenButton = document.querySelector("#fullscreen-btn");

  // Add event listeners for various actions
  playPauseButton.addEventListener("click", togglePlayPause);
  myVideo.addEventListener("timeupdate", updateProgressBar);
  progressBar.addEventListener("click", seek);
  fullscreenButton.addEventListener("click", goFullscreen);
  myVideo.addEventListener("dblclick", goFullscreen); 

  // play/pause function 
  function togglePlayPause() {
    if (myVideo.paused || myVideo.ended) {
      // If the video is paused or ended, play the video and update button image to 'pause'
      playPauseImg.src = "icons8-pause-64.png";
      myVideo.play();
    } else {
      // If the video is playing, pause the video and update button image to 'play'
      playPauseImg.src = "icons8-play-64.png";
      myVideo.pause();
    }
  }

  // progress bar function 
  function updateProgressBar() {
    const progress = (myVideo.currentTime / myVideo.duration) * 100;
    progressBarFill.style.width = progress + "%";
  }

  // progress function
  // Not only did I make the navigation bar display according to the progress of the video,
  //  I searched this function online. I defined a function called seek, 
  // which is used to adjust the playback position of the video when the user clicks on the progress bar.
  // Function to seek the video to a new time when the progress bar is clicked
  function seek(e) {
    // Get the width of the progress bar
    const progressBarWidth = progressBar.clientWidth;
    // Get the x-coordinate of the click relative to the progress bar
    const clickX = e.offsetX;
    // Get the duration of the video
    const duration = myVideo.duration;
    // Calculate the new current time and set it
    myVideo.currentTime = (clickX / progressBarWidth) * duration;
  }

  // fullscreen function  
  function goFullscreen() {
    if (!document.fullscreenElement) {
      // If not in fullscreen mode, enter fullscreen mode
      if (myVideo.requestFullscreen) {
        myVideo.requestFullscreen();
      } else if (myVideo.webkitRequestFullscreen) {
        myVideo.webkitRequestFullscreen(); 
      }
    } else {
      // If already in fullscreen mode, exit fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); 
      }
    }
  }
});
