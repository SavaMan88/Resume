$(document).ready(() => {
    $('.skill').click(function (event) {
        $('.skill-container').toggleClass('show');
        $('.skill-block').toggleClass('action');
        $('.skill-arrow').toggleClass('return');
    });
});
