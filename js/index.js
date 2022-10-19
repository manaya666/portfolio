//トップページ
function load_effect() {
    let element = document.getElementsByClassName('top__title');
    if (!element) return;
    for (let i = 0; i < element.length; i++) {
        element[i].classList.add('is-show');
    }
}
setTimeout(load_effect, 600);

//フェードアップ
function fadeAnime() {

    $('.fadeUpTrigger').each(function () {
        const elemPos = $(this).offset().top - 50;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
        }
    });
}

$(window).scroll(function () {
    fadeAnime();
});

$(window).on('load', function () {
    fadeAnime();
});