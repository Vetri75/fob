var currentTestimonialIndex = 0;
var testimonials = document.querySelectorAll('.testimonial-item');
var lastTestimonialIndex = testimonials.length - 1;
var startX = 0;
var endX = 0;

function showTestimonial(index) {
    if (index >= testimonials.length || index < 0) {
        console.log('Index out of bounds:', index);
        return;
    }

    currentTestimonialIndex = index;

    testimonials.forEach(function (testimonial, i) {
        testimonial.classList.remove('active');
        if (i === currentTestimonialIndex) {
            testimonial.classList.add('active');
        }
    });

    updateTestimonialContent(currentTestimonialIndex);

    // Change arrow color based on current testimonial index
    document.querySelector('.arrow.next .fa-arrow-right').style.color = currentTestimonialIndex === lastTestimonialIndex ? '#ff7f50' : '#1a2438'; // Change next arrow color to orange when last testimonial reached
    document.querySelector('.arrow.prev .fa-arrow-left').style.color = currentTestimonialIndex === 0 ? '#ff7f50' : '#1a2438'; // Change previous arrow color to orange when first testimonial reached
}

function updateTestimonialContent(index) {
    var content = testimonials[index].querySelector('p').innerHTML;
    var contentContainer = document.querySelector('.dc-csdc h6');
    contentContainer.innerHTML = content;
}

function nextTestimonial() {
    if (currentTestimonialIndex < lastTestimonialIndex) {
        showTestimonial(currentTestimonialIndex + 1);
    }
}

function prevTestimonial() {
    if (currentTestimonialIndex > 0) {
        showTestimonial(currentTestimonialIndex - 1);
    }
}

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    console.log('Touch start:', startX);
}

function handleTouchMove(event) {
    endX = event.touches[0].clientX;
    console.log('Touch move:', endX);
}

function handleTouchEnd() {
    console.log('Touch end:', endX);
    if (startX - endX > 50) {
        console.log('Swiped left');
        nextTestimonial();
    } else if (endX - startX > 50) {
        console.log('Swiped right');
        prevTestimonial();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    showTestimonial(currentTestimonialIndex);

    document.querySelector('#prevText').addEventListener('click', function () {
        prevTestimonial();
    });
    document.querySelector('#nextText').addEventListener('click', function () {
        nextTestimonial();
    });

    var slider = document.querySelector('.testimonials-slider');
    slider.addEventListener('touchstart', handleTouchStart, false);
    slider.addEventListener('touchmove', handleTouchMove, false);
    slider.addEventListener('touchend', handleTouchEnd, false);
});
