var scrollTop = 0,
    ticking = false,
    w = window.innerWidth,
    anim = document.getElementsByClassName('animate');

function reSetClass(index){
    for(j=0;j<anim.length;j++){
        if(index!=j){
            anim[j].classList.remove('animate1-on');anim[j].classList.add('animate1-off');
        }
    }
}
function animation(scroll_pos) {
    document.getElementsByClassName('horizontalScroll')[0].style.width = ((scroll_pos+h)/height)*100 + '%'

    if(scrollTop>=anim[0].offsetTop-(h/1.5) && scrollTop<anim[1].offsetTop-(h/1.5)){
        
        reSetClass(0)
        anim[0].classList.remove('animate1-off');anim[0].classList.add('animate1-on');

    }
    else if(scrollTop>=anim[1].offsetTop-(h/1.5) && scrollTop<anim[2].offsetTop-(h/1.5)){
        reSetClass(1)
        anim[1].classList.remove('animate1-off');anim[1].classList.add('animate1-on');
      
    }
    else if(scrollTop>=anim[2].offsetTop-(h/1.5) && scrollTop<anim[3].offsetTop-(h/1.5)){
        reSetClass(2)
        anim[2].classList.remove('animate1-off');anim[2].classList.add('animate1-on');
      
    }
    else if(scrollTop>=anim[3].offsetTop-(h/1.5)){
        reSetClass(3)
        anim[3].classList.remove('animate1-off');anim[3].classList.add('animate1-on');
      
    }
}

window.addEventListener('scroll', function(e) {

  scrollTop = window.pageYOffset;

  if (!ticking) {

    window.requestAnimationFrame(function() {
      animation(scrollTop);
      ticking = false;
    });
     
    ticking = true;

  }
  
});

