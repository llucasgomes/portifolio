$(document).ready(function () {
    let tamanho = $('.cabecalho').width()
    if (tamanho < 576) {
        $('.menu').hide(); 
        $('.btn-menu-off').hide();
    }else{
        $('.btn-menu-on').hide()
        $('.btn-menu-off').hide()
    }
    
});

$('#menuOn').on({ 
    click: function(){
        $('.menu').show(1000)
        $('.btn-menu-on').hide(1000);
        $('.btn-menu-off').show(1000);
    }   
});
$('#menuOff').on({
    
    click: function(){
        $('.menu').hide(1000)
        $('.btn-menu-off').hide(1000);
        $('.btn-menu-on').show(1000);
    }    
});