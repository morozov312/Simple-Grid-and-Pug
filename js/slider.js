if (window.matchMedia('(max-width: 768px)').matches) {
    $('.tiles__wrap').addClass('slider');
}
if (window.matchMedia('(min-width: 768px)').matches) {
    $('.tiles__wrap').removeClass('slider');
}
$('.slider').slick({
    autoplay: true,
    dots: true,
    arrows: false
});