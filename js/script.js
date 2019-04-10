window.addEventListener('DOMContentLoaded', ()=>{
    let menuList = document.querySelector(".menuList"),
        buttonMenuBox = document.querySelector(".buttonMenuBox");
    
    buttonMenuBox.addEventListener("click", ()=>{
        menuList.classList.toggle("hideSM");
        menuList.classList.toggle("showSM");        
        console.log(menuList);
    });    
    
});