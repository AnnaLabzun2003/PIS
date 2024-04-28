import './scss/header2.scss';
import './scss/content2.scss';
import './scss/sum_form.scss';

import 'bootstrap';

document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#carouselExampleControls')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000, // milliseconds
        wrap: true,
        keyboard: false // Вимкнути клавіатурне управління
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownContentLinks = document.querySelectorAll('.dropdown-content a');

    dropdownContentLinks.forEach(link => {
        link.addEventListener('click', function() {
            dropdownButton.textContent = this.getAttribute('data-value');
        });
    });
});

let tour = [];
tour[0] = {
    name: "Зачарований замок",
    price: 2600.00
};
tour[1] = {
    name: "Старовина фортеця",
    price: 3600.00
};
tour[2] = {
    name: "Вікенд в Мукачево",
    price: 1800.00
};
tour[3] = {
    name: "Самотня церква",
    price: 600.00
};

let selector = document.querySelector("#tour");

selector.innerHTML='';

