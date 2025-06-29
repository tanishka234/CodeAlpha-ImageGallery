
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.querySelector(".close");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;

function showLightbox(index) {
  lightbox.style.display = "flex";
  lightboxImg.src = galleryImages[index].src;
  currentIndex = index;
}

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    showLightbox(index);
  });
});

close.addEventListener("click", () => {
  lightbox.style.display = "none";
});

prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showLightbox(currentIndex);
});

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showLightbox(currentIndex);
});