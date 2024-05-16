
// video effect
window.addEventListener('scroll', function() {
  var section2 = document.getElementById('section2');
  var section2Top = section2.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  var customVideoPlayer = document.getElementById('custom-video-player');

  if (section2Top < windowHeight) {
    customVideoPlayer.classList.add('hidden');
  } else {
    customVideoPlayer.classList.remove('hidden');
  }
});

//header and nav section color change 
document.addEventListener("DOMContentLoaded", function() {
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const section2 = document.getElementById("section2");

  window.addEventListener("scroll", function() {
      const section2Top = section2.offsetTop;
      const scrollPos = window.scrollY + window.innerHeight / 2;

      if (scrollPos >= section2Top) {
         // Add 'light-text' class when section2 is at the top of the viewport
          header.classList.add("light-text");
          nav.classList.add("light-text");
      } else {
         // Remove 'light-text' class when section2 is not at the top of the viewport
          header.classList.remove("light-text");
          nav.classList.remove("light-text");
      }
  });
});
