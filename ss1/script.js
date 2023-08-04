//SWIPE
$('.carousel').on('touchstart', function(event){
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one('touchmove', function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
            console.log("Swipe left");
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
            console.log("Swipe right");
            $(this).carousel('prev');
        }
    });
    $('.carousel').on('touchend', function(){
        $(this).off('touchmove');
    });
});


//UWZGLEDNIENIE PASKA NA TELEFONIE

document.addEventListener("DOMContentLoaded", function() {
    const navbarHeight = window.innerHeight - document.documentElement.clientHeight;

    window.scrollTo({
      top: navbarHeight,
      behavior: 'smooth'
    });
    
});

