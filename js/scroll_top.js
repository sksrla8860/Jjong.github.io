function scroll_top(){
    
    
    $(window).on('scroll', function(){
        var wt = $(window).scrollTop(),
        wh = $(window).height();
        
        
        if(wt > wh){
            $('.topBtn').addClass('top_add');
        }else{
            $('.topBtn').removeClass('top_add');
        }
    });

    $('.topt').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({'scrollTop':0});
    })
}