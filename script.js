const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky ",this.window.scrollY > 120)
});
 let menu = document.querySelector('#menu-icon');
 let navlist = document.querySelector('.navlist')
 //função do clique do botão que chama o menu
 menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
     //função do clique do botão do menu ela fecha o menu pelo remove
 };
 window.onscroll  = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
    
 };
