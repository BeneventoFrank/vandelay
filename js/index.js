


    if(!navigator.userAgent.toLowerCase().includes('ipad')){

      var img = document.getElementById('img1');
      img.classList.add('bgImage');
      
      const sliderImages = document.querySelectorAll('.slide-in');
  
      var x = function(sliderImage){
          var slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
          var imageBottom = sliderImage.offsetTop + sliderImage.height;
          var isHalfShown = slideInAt > sliderImage.offsetTop;
          var isNotScrolledPast = window.scrollY < imageBottom;
          var direction = sliderImage.dataset.direction;

          if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add(`slide-image-${direction}`);
          } else {
            sliderImage.classList.remove(`slide-image-${direction}`);
          }
      }

      function checkSlide() {
        sliderImages.forEach(x);
      }
  
      window.addEventListener('scroll', checkSlide); 
  
    }


