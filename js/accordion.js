function accordion(){
    var list = $('#headBox').find('.list'),
        list_li = list.find('li'),
        pf_01 = list.find('.list_01'),
        pf_02 = list.find('.list_02'),
        pf_03 = list.find('.list_03'),
        conBox = $('#conBox');
    conBox.css({'height':'100vh', 'overflow':'hidden'});
    $('#slider_box').hide();
    
    pf_01.on('click', function(e){
        e.preventDefault();
        conBox.animate({"margin-left":0});
        conBox.css({'height':'auto', 'background-color':'#9999af'});
        $('#slider_box').fadeIn();
    });
    pf_02.on('click', function(e){
        e.preventDefault();
        conBox.animate({"margin-left":"-100%"});
        conBox.css({'height':'100vh', 'overflow':'hidden'});
        $('#slider_box').fadeOut();
    });
    pf_03.on('click', function(e){
        e.preventDefault();
        conBox.animate({"margin-left":"-200%"});
        conBox.css({'height':'1260vh', 'overflow':'hidden', 'background-color':'#4D4D4F'});
        $('#slider_box').fadeIn();
    });
    
    $('.p_main_l').on('click', function(){
        pf_01.click();
    });
    $('.p_main_r').on('click', function(){
        pf_03.click();
    });
    
    list_li.on('click', function(e){
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
    });
}