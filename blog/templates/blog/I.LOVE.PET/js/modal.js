var abrirModal = document.getElementById('btn-abrir-moda'),
overlay = document.getElementById('overlay'),
modal = document.getElementById('modal'),
btnCerrarmodal= document.getElementById('cerar-modal');

abrirModal.addEventListener('click',function(){
overlay.classList.add('activar');
});
