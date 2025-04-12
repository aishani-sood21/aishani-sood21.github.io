document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector(".skills-section");
    const achievementsSection = document.getElementById("achievements");
    const timelineItems = document.querySelectorAll(".timeline-item");
    let confettiFired = false;
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !confettiFired) {
          achievementsSection.classList.remove("hidden");
          void achievementsSection.offsetWidth;
          achievementsSection.classList.add("visible");
  
          timelineItems.forEach((item, i) => {
            setTimeout(() => item.classList.add("visible"), i * 300);
          });
  
          if (window.confetti) {
            window.confetti({
              particleCount: 200,
              spread: 100,
              origin: { y: 0.6 }
            });
          }
  
          confettiFired = true;
        }
      });
    }, { threshold: 0.6 });
  
    observer.observe(skillsSection);
  });
  