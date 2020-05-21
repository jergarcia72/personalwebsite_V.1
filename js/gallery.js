const galleryContainers = document.querySelectorAll('.gallery-container');
const magicPad = 3.5;

function sizeGallery(){
    galleryContainers.forEach(galleryContainer => {
        let counter = 1;
        const gallerySlide = galleryContainer.querySelector('.gallery-slide');
        const galleryImages = galleryContainer.querySelectorAll('.gallery-image-container');
                //nav
        const nextTag = galleryContainer.querySelector(".next");
        const prevTag = galleryContainer.querySelector(".prev");
        const size = galleryContainer.clientWidth;
        gallerySlide.style.width =  ((galleryContainer.clientWidth * galleryImages.length) + magicPad) + "px";
        
        galleryImages.forEach(image => {
            image.style.width=(size - magicPad)+'px';
        });
        
        gallerySlide.style.transform = 'translateX(' + (-size * counter )+ 'px)';
        
        //nav listeners
        nextTag.addEventListener('click', () => {
            if (counter >= galleryImages.length - 1) return;
            gallerySlide.style.transition = "transform 0.4s ease-in-out";
            counter++;
            gallerySlide.style.transform = 'translateX(' + (-size * counter )+ 'px)';
        });
        
        prevTag.addEventListener('click', ()=>{
            if(counter <= 0) return;
            gallerySlide.style.transition = "transform 0.4s ease-in-out";
            counter--;
            gallerySlide.style.transform = 'translateX(' + (-size * counter )+ 'px)';
        });
        
        gallerySlide.addEventListener('transitionend', (event)=>{
            if (galleryImages[counter].id === 'lastClone'){
                gallerySlide.style.transition = "none";
                counter = galleryImages.length - 2;
                gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
            if (galleryImages[counter].id === 'firstClone'){
                gallerySlide.style.transition = "none";
                counter = galleryImages.length - counter;
                gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
        });
    })
}

sizeGallery();

function debounce(func){
    var timer;
    return function(event){
      if(timer) clearTimeout(timer);
      timer = setTimeout(func,100,event);
    };
  }

window.addEventListener("resize",debounce(function(e){
    sizeGallery();
}));