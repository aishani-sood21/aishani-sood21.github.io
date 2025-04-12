document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeLightbox = document.getElementById("close-lightbox");

  items.forEach(item => {
    const img = item.querySelector("img");

    item.addEventListener("click", () => {
      lightbox.classList.remove("hidden");
      lightboxImg.src = img.src;

      // ✅ Set caption from alt text
      lightboxCaption.textContent = img.alt || "";
    });
  });

  closeLightbox.addEventListener("click", () => {
    lightbox.classList.add("hidden");
    lightboxImg.src = "";
    lightboxCaption.textContent = "";
  });
});
