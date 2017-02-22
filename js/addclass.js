$(document).ready(function() {
    var $window = $(window),
        $html = $('.pros-block');

    function resize() {
        if ($window.width() > 768) {
            return $html.addClass('text-left');
        }

        $html.removeClass('text-left');
    }

    $window
        .resize(resize)
        .trigger('resize');
});
