window.addEventListener('DOMContentLoaded', ()=>{
    let menuList = document.querySelector(".menuList"),
        buttonMenuBox = document.querySelector(".buttonMenuBox");
    
    buttonMenuBox.addEventListener("click", ()=>{
        menuList.classList.toggle("hideSM");
        menuList.classList.toggle("showSM");
    });



    redrawingImg = new redrawing({
      divider: '.divider',
      leftBlock: '.imageBlock_left',
      rightBlock: '.imageBlock_right',
      wrapper: '.imageBox',
      imgLeft: '.imageBlock_left>img',
      imgRight: '.imageBlock_right>img'
    });


    $('.menuList__item').on('click', function(e){
      e.preventDefault();
      
      let href = $(this).attr('href'),
          section = $(href);

      $('html, body').animate({scrollTop:section.offset().top}, 1000);


    });

    let up = $('.up');

    window.addEventListener('scroll', function(){
      
      if ((window.pageYOffset>100)&&(up.is(':hidden'))) {
        up.show(300);
        
      }
      if ((window.pageYOffset<100)&&(up.is(':visible'))){
        up.hide(300);
      }

    });

    up.on('click', function(){
      $('html, body').animate({scrollTop:0}, 200);
    })
    

    
});