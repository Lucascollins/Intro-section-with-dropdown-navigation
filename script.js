var activeMenu = document.querySelector('.active')


var btnMenu = document.getElementById("menu-icon").addEventListener('click',()=>{
    activeMenu.style.display = "flex";
    btnMenu.style.display = 'none'
    
})
var closeMenu = document.getElementById("close-menu").addEventListener('click',()=>{
    activeMenu.style.display = "none";
    btnMenu.style.display = "flex"
})