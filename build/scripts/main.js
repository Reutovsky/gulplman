$(document).ready(function(){
    var $butt = $('#hcb'),
        $menu = $('#menu'),
        $ws5  = $('.header__whitespace5'),
        $ws6  = $('.header__whitespace6'),
        $hg   = $('.header-catalog'),
        $hs   = $('.header-conditions'),
        $hmc  = $('#hmc')

    $butt.on('click', function(){
        $menu.toggleClass('menu-visible');
        $ws5.toggleClass('header-bottomline-clicked');
        $ws6.toggleClass('header-bottomline-clicked');
        $hg.toggleClass('header-bottomline-clicked');
        $hs.toggleClass('header-bottomline-clicked');
        $butt.toggleClass('header-catalog-button-clicked');
        console.log('clicked all');
    });

    $hmc.on('click', function() {
        $menu.removeClass('menu-visible');
        $ws5.removeClass('header-bottomline-clicked');
        $ws6.removeClass('header-bottomline-clicked');
        $hg.removeClass('header-bottomline-clicked');
        $hs.removeClass('header-bottomline-clicked');
        $butt.removeClass('header-catalog-button-clicked');
    });

});