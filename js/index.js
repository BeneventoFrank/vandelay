


    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    const sliderImages = document.querySelectorAll('.slide-in');
    console.log('sliderImages', sliderImages)
    function checkSlide() {
      sliderImages.forEach(sliderImage => {
        // half way through the image
        console.log('-----------------')
        alert(navigator.userAgent)
        console.log(window.scrollY)
        console.log(window.innerHeight)
        console.log(sliderImage.height)
        console.log('-----------------')
        
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        console.log('slidein at - ', slideInAt)
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        console.log("image-bottom",imageBottom)
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        let direction = sliderImage.dataset.direction;
        console.log('direction ',direction);
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add(`slide-image-${direction}`);
        } else {
          sliderImage.classList.remove(`slide-image-${direction}`);
        }
      });
    }

    window.addEventListener('scroll', debounce(checkSlide)); 
