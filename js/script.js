// Mixitup Filter
var mixerProjects = mixitup(".projects_container", {
  selectors: {
    target: ".project_item",
  },
  animation: {
    duration: 300,
  },
});

const linkWork = document.querySelectorAll(".category_btn");
function activeWork() {
  linkWork.forEach((a) => a.classList.remove("active_work"));
  this.classList.add("active_work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));

// Testimonials swiper
var testiSwiper = new Swiper(".testimonial_container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
