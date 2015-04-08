"use strict";

import 'slick-carousel';

import $ from 'jquery';
import getRss from 'getRss';
import createSlide from 'createSlideMarkup';

/**
*
* Add new rss feed slide
*
**/

$(document).on('submit', 'form', function(event) {
    event.preventDefault();
    var $form = $(this);
    var url = $form.find('#rss').val();
    var numberOfSlides = $form.find('#number').val();

    getRss(url, function(err, data) {
        if(err) {
            console.error(err.stack);
        } else {
            var rand = Math.random().toString(36).substring(10);
            var id = `slide-${rand}`;
            var slide = createSlide(data, id);

            $('#slides').append(slide);
            $(`#${id}`).slick({
                infinite: false,
                initialSlide: 0,
                vertical: true,
                verticalSwiping: true,
                variableWidth: false,
                rows: numberOfSlides
            });
        }
    });

});



