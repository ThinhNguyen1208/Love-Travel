let toggle =document.querySelector('.header__toggle');
let sidebar=document.querySelector('.sidebar');
let close_toggle=document.querySelector('.sidebar__close-icon');
toggle.onclick=function(){
    sidebar.classList.add('active');
}


close_toggle.onclick=function(){
    sidebar.classList.remove('active');
}


