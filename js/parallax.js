function parallax_scroll(){
        var img_02_02_top =  $('.img_02_02').offset().top,
            img_02_03_top =  $('.img_02_03').offset().top,
            title = $('.atc_02').find('h2'),
            sub_title_01 = $('.atc_02').find('h3'),
            text_01 = $('.atc_02').find('p');
        
        $(window).on("scroll", function(){
            var p_value = $(window).scrollTop();
            console.log(p_value);
            
            $('.img_02_01').css('background-position-y', p_value);
            if(p_value >= img_02_02_top){
                $('atc_01').css({'position':'fixed', 'bottom': 0});
            }
            if(p_value > img_02_02_top){
                $('.img_02_02').css('background-position-y', p_value - img_02_02_top );
                title.css({'top': p_value * 2});
                console.log(p_value);
            }else{
                $('.img_02_02').css('background-position-y', 'top');
                title.css({'top': p_value});
                console.log('.img_02_02 top');
            }
            
            if(p_value > img_02_03_top){
                var top3 = p_value - img_02_03_top - 800;
                $('.img_02_03').css('background-position-y', top3);
                title.css({'top':p_value * 2});
                console.log('.img_02_03 variable');
            }else{
                $('.img_02_03').css('background-position-y', -200);
                console.log('.img_02_02 top');
            }
        });
    }