// faq
const faqs = document.querySelectorAll(".faq__item");

faqs.forEach((item) => {
  const question = item.querySelector(".faq__question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
    question.classList.toggle("active");
  });
});

// swiper
const swiper = new Swiper(".partnerSwiper", {
  slidesPerView: 4,
  spaceBetween: 40,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 3 },
    480: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
});
