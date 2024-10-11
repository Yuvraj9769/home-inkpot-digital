window.onload = function () {
  Array.from(document.getElementsByClassName("box")).forEach((e) => {
    let count = 0;
    const targetValue = parseInt(e.getElementsByTagName("p")[0].textContent);

    const interval = setInterval(() => {
      count += 1;
      e.getElementsByTagName("p")[0].textContent = count + " +";

      if (count >= targetValue) {
        clearInterval(interval);
      }
    }, 25);
  });
};

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
