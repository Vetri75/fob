

document.addEventListener('DOMContentLoaded', function () {
    var backgroundVideo = document.getElementById('backgroundVideo');
    window.addEventListener('scroll', function () {
        var yPos = window.scrollY;
        var speed = 0.4;

        backgroundVideo.style.transform = 'translate3d(0, ' + yPos * speed + 'px, 0)';
    });
});






document.addEventListener('DOMContentLoaded', function () {
    var backgroundVideo = document.getElementById('backgroundVideo');

    // Function to play or pause the video when clicked
    backgroundVideo.addEventListener('click', function () {
        if (backgroundVideo.paused) {
            backgroundVideo.play();
        } else {
            backgroundVideo.pause();
        }
    });

    // Function to handle the scroll icon click
    var scrollIcon = document.getElementById('scroll-icon');
    scrollIcon.addEventListener('click', function (event) {
        event.preventDefault();
        var target = document.getElementById('scrolls');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

});






document.addEventListener("DOMContentLoaded", function () {
    var currentPage = window.location.pathname.split('/').pop();
    var desktopLinks = document.querySelectorAll('.as-as a');
    var mobileLinks = document.querySelectorAll('.owe-cwccd a');

    for (var i = 0; i < desktopLinks.length; i++) {
        if (desktopLinks[i].getAttribute('href') === currentPage) {
            desktopLinks[i].classList.add('active');
        }
    }

    for (var j = 0; j < mobileLinks.length; j++) {
        if (mobileLinks[j].getAttribute('href') === currentPage) {
            mobileLinks[j].classList.add('active');
        }
    }
});


 // Detect iOS devices
 var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

 if (isIOS) {
     document.body.classList.add('ios');
 }


// Iframe Functionalities


function closeOverlay() {
    var overlay = document.querySelector('.overlay');
    var iframe = overlay.querySelector('iframe');

    // The iframe source to an empty string to stop the video
    iframe.src = '';
    overlay.style.display = 'none';
}




function playVideo(videoIndex) {
    var overlay = document.querySelector('.overlay');
    var iframe = overlay.querySelector('iframe');

    var videoUrl = getVideoUrl(videoIndex);

    iframe.src = videoUrl + '&autoplay=1'; //Autoplay parameter
    overlay.style.display = 'flex';
}

function getVideoUrl(videoIndex) {
    switch (videoIndex) {
        case 1:
            return "https://player.vimeo.com/video/932862968?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        case 2:
            return "https://player.vimeo.com/video/932865959?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        case 3:
            return "https://player.vimeo.com/video/932869479?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        case 4:
            return "https://player.vimeo.com/video/932870016?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        case 5:
            return "https://player.vimeo.com/video/932866553?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        case 6:
            return "https://player.vimeo.com/video/932869287?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        default:
            return "";
    }
}



// Testimonial

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
}

function handleTouchMove(event) {
    endX = event.touches[0].clientX;
}

function handleTouchEnd() {
    if (startX - endX > 50) {
        nextTestimonial();
    } else if (endX - startX > 50) {
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






// Mobile Nav Function


function openNav() {
    document.getElementById("mySidenav").style.width = "92%";
    document.getElementById("main").style.marginLeft = "92%";
    document.body.classList.add('no-scroll'); // Add class to prevent scrolling on the body
    document.getElementById("noniu-fx").style.display = "none"; // Hide scroll icon
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.classList.remove('no-scroll'); // Remove class to allow scrolling on the body
    document.getElementById("noniu-fx").style.display = "block"; // Show scroll icon
}













