function menu(){
    var menu_icon = $('#headBox').find('.menu_btn'),
        $bgBox = $('#headBox').find('#bg'),
        close_icon = $('#headBox').find('.close_btn');
    
    menu_icon.on('click', function(){
        var $nav = $('#headBox').find('nav');
        $(this).toggleClass('close_btn');
        $nav.toggleClass('nav_add');
        $bgBox.stop().fadeIn().toggleClass('bg_op');
    });
}