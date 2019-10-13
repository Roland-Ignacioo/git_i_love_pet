$('.galery_imag').click(function(e){
    var Imagenes = e.target.src;
    var modal = '<div class="modal"><img src="'+Imagenes+'" class="modal_img"><div class="modal_boton">X</div></div>';
    $('.section').append(modal)
    $('.modal_boton').click(function(){
        $('.modal').remove();
        
    })
})  ;

$(document).keyup(function(e){
    if (e.wich=27){
        $('.modal').remove();
    }
})