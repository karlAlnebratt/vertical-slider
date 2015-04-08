"use strict";

import moment from 'moment';

export default function createSlideMarkup (data, id) {
    var listItems = '';

    data.item.forEach(x => {
        var description = x.description ? `<div class="vertical-slider__description">${x.description}</div>` : '';
        var dateFormat = moment(x.pubDate).format('YYYY-MM-DD HH:mm');
        var time = x.pubDate ? `<time class="vertical-slider__time">${dateFormat}</time>` : '';
        var item = `<article class="vertical-slider__item">
                    <a href="${x.link}" target="_blank">
                        <h4 class="vertical-slider__title">${x.title}</h4>
                        ${time}
                        ${description}
                    </a>
                </article>`;

        listItems += item;

    });


    var slide = `<section class="vertical-slider">
                    <h3>${data.title}</h3>
                    <div id="${id}">
                        ${listItems}
                    </div>
                </section>`;


    return slide;

}

