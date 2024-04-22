var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
 
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    
   
 
 });
 function ajustarSlidesVisiveis() {
  // Obtenha a largura da tela
  const larguraTela = window.innerWidth;

  // Se a largura da tela for menor ou igual a 1100px, defina slidesPerView como 2
  if (larguraTela <= 836) {
    swiper.params.slidesPerView = 1;
  
  } else if (larguraTela <= 1270) {
    swiper.params.slidesPerView = 2;
  } else {
    swiper.params.slidesPerView = 3; // Caso contrário, mantenha 3 slides por visualização
  }
  if (swiper.params.slidesPerView === 1) {
    swiper.navigation.nextEl.style.display = 'none';
    swiper.navigation.prevEl.style.display = 'none';
  } else {
    swiper.navigation.nextEl.style.display = '';
    swiper.navigation.prevEl.style.display = '';
  }
  // Atualize o Swiper para aplicar as alterações
  swiper.update();
}

// Adicione um ouvinte de evento para o redimensionamento da janela
window.addEventListener("resize", ajustarSlidesVisiveis);

// Chame a função uma vez para ajustar o número inicial de slides visíveis
ajustarSlidesVisiveis();

