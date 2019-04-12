window.addEventListener('DOMContentLoaded', ()=>{
    let menuList = document.querySelector(".menuList"),
        buttonMenuBox = document.querySelector(".buttonMenuBox");
    
    buttonMenuBox.addEventListener("click", ()=>{
        menuList.classList.toggle("hideSM");
        menuList.classList.toggle("showSM");
    });


    const divider = document.querySelector(".divider"),
          leftBlock = document.querySelector(".imageBlock_left"),
          rightBlock = document.querySelector(".imageBlock_right"),
          wrapper = document.querySelector(".imageBox"),
          imgLeft = document.querySelector(".imageBlock_left>img");
          imgRight = document.querySelector(".imageBlock_right>img");
          
    leftBlock.style.width = wrapper.offsetWidth + divider.offsetWidth +'px';
    leftBlock.style.height = wrapper.offsetHeight + 'px';
    imgLeft.style.width = wrapper.offsetWidth + divider.offsetWidth +'px';

    rightBlock.style.width = wrapper.offsetWidth + divider.offsetWidth + 'px';
    rightBlock.style.height = wrapper.offsetHeight + 'px';
    imgRight.style.width = wrapper.offsetWidth + divider.offsetWidth + 'px';

    divider.style.left = "50%";
    leftBlock.style.width = (wrapper.offsetWidth/2) + 'px';


    function moveAt(e) {
    
      let posX;

        if(e.which=="1"){
          posX = (e.pageX-wrapper.getBoundingClientRect().x) - divider.offsetWidth / 2;
        };

        if(e.which=="0"){
          posX = (e.targetTouches[0].clientX-wrapper.getBoundingClientRect().x) - divider.offsetWidth / 2;
        };

        if ((posX>=0)&&(posX<=wrapper.offsetWidth)){
        divider.style.left = posX  + 'px';
        leftBlock.style.width = posX + 'px';        
        }
   
    }


  divider.addEventListener('mousedown', (e)=>{

    wrapper.onmousemove = function(e) {
      moveAt(e);
    }

  });

  divider.addEventListener("touchstart", (e)=>{
        
    divider.addEventListener('touchmove', function(e){
      moveAt(e);
    });
    
  });


  divider.addEventListener("mouseup", ()=>{
    wrapper.onmousemove = null;
    divider.onmouseup = null;
  });

  wrapper.onmousedown = function(){
      return false;
  };
    
});