// public/scripts/skills-animation.js

document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector(".skills-section");
  const progressBars = document.querySelectorAll(".progress");

  let animated = false;

  function animateSkills() {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos && !animated) {
      progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute("data-width");
        bar.style.width = targetWidth;
      });
      animated = true;
    }
  }

  window.addEventListener("scroll", animateSkills);
});
