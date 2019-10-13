jQuery('document').ready(function($){

var btnMenu = $('.icon-menu'),
menu = $('.navegacion ul');

btnMenu.click(function(){

if( menu.hasClass('mostrar')){
    menu.removeClass('mostrar');
}else{
    menu.addClass('mostrar');
}
});
});

//MODAL

var btnAbrirModal = document.getElementById('abrirM'),
overlay = document.getElementById('overlay'),
modal = document.getElementById('modal'),
btnCerrarModal = document.getElementById('cerar-modal');

    btnAbrirModal.addEventListener('click',function(){
        overlay.classList.add('activar');
        modal.classList.add('activar');
    });

    btnCerrarModal.addEventListener('click',function(){
      overlay.classList.remove('activar');
      modal.classListremove('activar');
    });
