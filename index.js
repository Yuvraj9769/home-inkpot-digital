let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showSlide(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove("active");
    if (i === index) {
      testimonial.classList.add("active");
    }
  });
}

function moveSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = testimonials.length - 1;
  } else if (currentIndex >= testimonials.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Show the first testimonial initially
showSlide(currentIndex);
