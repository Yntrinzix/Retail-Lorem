var carousels = document.getElementsByClassName('carousel'),
    width = window.innerWidth,
    next = document.getElementsByClassName('carousel-button-next')[0],
    prev = document.getElementsByClassName('carousel-button-prev')[0],
    dots = document.getElementsByClassName('carousel-dots')[0],
    inner = document.getElementsByClassName('carousel-inner')[0],
    title = document.getElementsByClassName('carousel-title'),
    imgs = inner.getElementsByClassName('carousel-img'),
    div = document.getElementsByClassName('carousel-div'),
    menu = document.getElementById('menu'),
    hambg = document.getElementById('hambg'),
    indexCurrent=0,
    body = document.body,
    html = document.documentElement,
    height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    var h = window.innerHeight;
    div[0].style.opacity = 1;
    menu.style.display = 'none';
    function imgSet(){
        for(i=0;i<imgs.length;i++)
        {
            imgs[i].style.width = width+'px';
            
            
        }
    }
    imgSet();
    
function menuOff(){
    menu.classList.remove('mobile-menu-on');menu.classList.add('mobile-menu-off'); //IE--Fallback
    hambg.classList.remove('hamburger-on');hambg.classList.add('hamburger-off'); //IE--Fallback
    console.log('close')
}

function menuOn(){
    menu.classList.remove('mobile-menu-off');menu.classList.add('mobile-menu-on'); //IE--Fallback
    hambg.classList.remove('hamburger-off');hambg.classList.add('hamburger-on'); //IE--Fallback 
}
function mobileMenu(){
    menu.style.display = 'flex';
    if(menu.className=='flex mobile-menu mobile-menu-off'){
        menuOn();   
        
    }else if(menu.className=='flex mobile-menu mobile-menu-on'){
        menuOff();
    }
    
}
document.getElementsByClassName('horizontalScroll')[0].style.width = ((h)/height)*100 + '%'
window.onresize = function(event) {
    width = window.innerWidth
    imgSet();
    inner.style.left = -width * indexCurrent +'px';
    height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    h = window.innerHeight;
    document.getElementsByClassName('horizontalScroll')[0].style.width = ((h)/height)*100 + '%'
};

    function switchImg(){
        for(i=0;i<div.length;i++)
        {
            div[i].style.opacity = 0;
        }
        
        inner.style.left = -width * indexCurrent +'px';
        div[indexCurrent].style.opacity = 1;
    }

    function refreshCarousel()
{
    x = 7;  // 5 Seconds

    indexCurrent = indexCurrent+1;
        if(indexCurrent >= div.length){
            indexCurrent = 0;
        }

    switchImg();

    setTimeout(refreshCarousel, x*1000);
}


refreshCarousel();

[].forEach.call(carousels, function (c) {


    
    next.addEventListener('click', function (){
        indexCurrent = indexCurrent+1;
        if(indexCurrent >= div.length){
            indexCurrent = 0;
        }

        switchImg();
    });

    prev.addEventListener('click', function (){
        indexCurrent--;

        if(indexCurrent < 0){
            indexCurrent = div.length-1;
        }

        switchImg();
    });
});



function idNavigator(endX, endY, duration) {
  var startX = window.scrollX || window.pageXOffset,
    startY = window.scrollY || window.pageYOffset,
    distanceX = endX - startX,
    distanceY = endY - startY,
    startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  var easeInOutQuart = function(time, from, distance, duration) {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  var timer = window.setInterval(function() {
    var time = new Date().getTime() - startTime,
      newX = easeInOutQuart(time, startX, distanceX, duration),
      newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      window.clearInterval(timer);
    }
    window.scrollTo(newX, newY);
  }, 1000 / 60); // 60 fps
};


function idScroll(end){   
    window.smoothScrollTo = idNavigator(0, document.getElementById(end).offsetTop-90, 600);
    menuOff();
}
