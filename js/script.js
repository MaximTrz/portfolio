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
    

    
});