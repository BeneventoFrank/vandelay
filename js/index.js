


    // function debounce(func, wait = 20, immediate = true) {
    //   var timeout;
    //   return function() {
    //     var context = this, args = arguments;
    //     var later = function() {
    //       timeout = null;
    //       if (!immediate) func.apply(context, args);
    //     };
    //     var callNow = immediate && !timeout;
    //     clearTimeout(timeout);
    //     timeout = setTimeout(later, wait);
    //     if (callNow) func.apply(context, args);
    //   };
    // };

    // const sliderImages = document.querySelectorAll('.slide-in');

    // function checkSlide() {
    //   sliderImages.forEach(sliderImage => {
    //     // half way through the image
       
    //     const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    //     console.log('slidein at - ', slideInAt)
    //     // bottom of the image
    //     const imageBottom = sliderImage.offsetTop + sliderImage.height;
    //     console.log("image-bottom",imageBottom)
    //     const isHalfShown = slideInAt > sliderImage.offsetTop;
    //     const isNotScrolledPast = window.scrollY < imageBottom;
    //     let direction = sliderImage.dataset.direction;
    //     console.log('direction ',direction);
    //     if (isHalfShown && isNotScrolledPast) {
    //       sliderImage.classList.add(`slide-image-${direction}`);
    //     } else {
    //       sliderImage.classList.remove(`slide-image-${direction}`);
    //     }
    //   });
    // }
    console.log(navigator.userAgent.toLowerCase())
    // window.addEventListener('scroll', checkSlide); 
    if(navigator.userAgent.toLowerCase().includes('ipad')){
      console.log('here.')
    }
    console.log('-----------------')
    console.log()
    console.log('-----------------')    
