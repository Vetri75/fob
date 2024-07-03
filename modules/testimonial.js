let currentIndex = 0;
const items = document.querySelectorAll('.testimonial-item');

function showTestimonial(index) {
    items.forEach((item, idx) => {
        if (idx === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function prevTestimonial() {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    showTestimonial(currentIndex);
}

function nextTestimonial() {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    showTestimonial(currentIndex);
}

// Set initial active testimonial
showTestimonial(currentIndex);