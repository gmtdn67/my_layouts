document.addEventListener('DOMContentLoaded', function () {

   // 1. Инициализируем Swiper для каждой карточки отдельно
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach((card) => {
    // Ищем слайдер и пагинацию внутри конкретной карточки
    const slider = card.querySelector('.product-card__slider');
    const pagination = card.querySelector('.product-card--pagination');

    // Проверяем, что слайдер существует
    if (slider) {
      new Swiper(slider, {
        loop: true,
        speed: 600,

        // Важно: указываем конкретный элемент пагинации внутри этой карточки
        pagination: {
          el: pagination,
          clickable: true
        },

        navigation: {
          nextEl: card.querySelector('.swiper-button-next'),
          prevEl: card.querySelector('.swiper-button-prev'),
        },

        breakpoints: {
          0: {
            navigation: { enabled: true },
            autoplay: {
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }
          },
          1024: {
            navigation: { enabled: true },
            autoplay: false
          }
        },
      });
    }
  });

  Fancybox.bind("[data-fancybox]", {
  
  infinite: true,       
  protect: true,        
  Toolbar: {
    display: {
      left: ["infobar"],
      middle: [],
      right: ["slideshow", "fullscreen", "thumbs", "close"],
    },
  },
  Images: {
    Panzoom: {
      maxScale: 2,      
    },
  },
});


  const likeButtons = document.querySelectorAll('.product-card--like');

  likeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isActive = button.classList.contains('active');
      const countElement = button.querySelector('.product-card--like-count');
      let count = parseInt(countElement.textContent, 10);

      if (isActive) {
        button.classList.remove('active');
        countElement.textContent = count - 1;
      } else {
        button.classList.add('active');
        countElement.textContent = count + 1;
      }
  })})

  const tabsContainers = document.querySelectorAll('.product-card--select-tabs');

  tabsContainers.forEach(container => {
  container.addEventListener('click', (e) => {
    const tab = e.target.closest('.product-card--tab');
    if (!tab) return;

    const tabs = container.querySelectorAll('.product-card--tab');
    tabs.forEach(t => t.classList.remove('active'));

    tab.classList.add('active');
  });
});

productCards.forEach(card => {
  card.addEventListener('click', (event) => {
  
    const target = event.target;
    if (
      target.closest('.swiper-button-prev') ||       
      target.closest('.swiper-button-next') ||       
      target.closest('.swiper-pagination') ||       
      target.closest('.product-card__zoom') ||      
      target.closest('.product-card--like') ||       
      target.closest('.product-card--buy') ||       
      target.closest('.product-card--calc') ||       
      target.closest('.product-card--tab') ||        
      target.closest('.product-card--select-tabs') 
    ) {
      return; 
    }
    window.open('/calc', '_blank');
  });
});

});