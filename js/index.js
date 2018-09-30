
    var img = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');

    if(navigator.userAgent.toLowerCase().includes('ipad')){
      img2.classList.add('hidden');
      img3.classList.add('hidden');
    }
    else 
    { 
      img.classList.add('bgImage');
      img2.classList.add('bgImage');
      img3.classList.add('bgImage');
    }

