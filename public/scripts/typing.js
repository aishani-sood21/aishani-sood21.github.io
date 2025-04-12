document.addEventListener("DOMContentLoaded", () => {
    const phrases = ["Hello!", "I am Aishani"];
    const el = document.getElementById("typewriter");
  
    let phraseIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let lastTimestamp = 0;
    let delay = 100;
  
    function type(timestamp) {
      if (timestamp - lastTimestamp < delay) {
        requestAnimationFrame(type);
        return;
      }
  
      const fullText = phrases[phraseIndex];
  
      if (isDeleting) {
        charIndex--;
        currentText = fullText.substring(0, charIndex);
      } else {
        charIndex++;
        currentText = fullText.substring(0, charIndex);
      }
  
      el.innerHTML = currentText + '<span class="cursor">|</span>';
  
      if (!isDeleting && charIndex === fullText.length) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        delay = 600;
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      } else {
        delay = isDeleting ? 80 : 130;
      }
  
      lastTimestamp = timestamp;
      requestAnimationFrame(type);
    }
  
    requestAnimationFrame(type);
  });
  