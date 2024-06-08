let currentIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slides-item");
  const dots = document.querySelectorAll(".dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  currentIndex++;
  if (currentIndex > slides.length) {
    currentIndex = 1;
  }
  slides[currentIndex - 1].style.display = "block";
  dots[currentIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Thay đổi hình ảnh sau mỗi 3 giây
}

function currentSlide(n) {
  const slides = document.querySelectorAll(".slides-item");
  const dots = document.querySelectorAll(".dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n - 1].style.display = "block";
  dots[n - 1].className += " active";
  currentIndex = n;
}

document.addEventListener("DOMContentLoaded", showSlides);
