document.addEventListener('DOMContentLoaded', function() {
  new MobileMenu();
  const el = document.querySelector('.header-torigger');
  const $header = document.querySelector('.header');
  const cb = function(entries, observer) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        //console.log('outview');
        $header.classList.add('torigger');
      } else {
        //console.log('inview');
        $header.classList.remove('torigger');
      }
    });
  }
  const io = new IntersectionObserver(cb);
  io.observe(el);

  const slide_cb = function(entries, observer) {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('inview');
        observer.unobserve(entry.target);
      }
    })
  }

  const slide_els = document.querySelectorAll('.cover-slide');
  if (slide_els != null) {
    const slide_io = new IntersectionObserver(slide_cb);
    slide_els.forEach(slide_el => {
      slide_io.observe(slide_el);
    });
  }

  const firstSwiper = new Swiper(".first-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
      delay: 2000,
    },
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });
  const secondSwiper = new Swiper(".second-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
      delay: 2000,
      reverseDirection: true,
    },
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });
  const subhero_swiper = new Swiper(".subhero-swiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 1000
    }
  });
});