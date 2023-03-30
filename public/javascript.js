let menu = document.getElementById('menu-btn');
let mobilenavbar = document.querySelector('.navbar');

menu.addEventListener('click',(event)=>{
    event.preventDefault();
    mobilenavbar.classList.toggle('active');

})
