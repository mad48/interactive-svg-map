$(window).on('load', function () {
    var mapElement = $(".interactive-map");

    mapElement.load(mapElement.attr('data-src'), function () {
        for (i = 0; i < regions.length; i++) {
            $('#' + regions[i].code).data('region', regions[i]);
            $('#' + regions[i].code + '-rayon').hide();
            $('#' + regions[i].code + " polygon").css({'fill': regions[i].bgcolor});
        }

        mapElement.find('g')

            .mouseover(function (e) {
                var regionData = $(this).data('region');
                $('<div class="info-popup">' + regionData.name + '</div>').appendTo('body');
            })


            .mouseleave(function () {
                $('.info-popup').remove();
            })


            .mousemove(function (e) {
                var mouseX = e.pageX,
                    mouseY = e.pageY;

                var infoPopup = $('.info-popup');

                infoPopup.css({
                    top: mouseY - 50,
                    left: mouseX - (infoPopup.width() / 2)
                });
            })

            .mousedown(function (e) {
                for (i = 0; i < regions.length; i++) {
                    $('#' + regions[i].code + '-rayon').hide('fast');
                }

                var regionData = $(this).data('region');

                $('#' + regionData.code + '-rayon').show('fast');

                $('html, body').animate({scrollTop: $('div[id="' + regionData.code + '-rayon"]').top}, 1000); //.offset().top

                return false;
            });

    });
});







