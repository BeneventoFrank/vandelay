


// let imgDiv = document.querySelector('#main-carousel-img');
// imgDiv.classList.add(`main-carousel-img-1`);
// let sec = 0;
// let imgCounter = 2;

// setInterval(()=>{
//     if(sec === 4){
//         for(let i = 0; i<=3;i++){
//             imgDiv.classList.remove(`main-carousel-img-${i}`);
//         }

        
//         TweenMax.to(imgDiv, 1, { x:100 ,  ease:Power2.easeIn });        

//         imgDiv.classList.add(`main-carousel-img-${imgCounter}`);
//         sec = 0;
//         imgCounter = imgCounter +1;
//         if(imgCounter===4){
//            imgCounter = 1;
//         }
//     }
//     sec = sec +1;
// },1000)


function checkSlide(e){
    console.log(e);
}
window.addEventListener('scroll',checkSlide);