


 
 // Your JavaScript code (script.js)

 

document.addEventListener('DOMContentLoaded', function () {
    var backgroundVideo = document.getElementById('backgroundVideo');
    window.addEventListener('scroll', function () {
        var yPos = window.scrollY;
        var speed = 0.4; // Adjust this for the parallax speed

        backgroundVideo.style.transform = 'translate3d(0, ' + yPos * speed + 'px, 0)';
    });
});






document.addEventListener('DOMContentLoaded', function () {
    var backgroundVideo = document.getElementById('backgroundVideo');
    
    // Function to play or pause the video when clicked
    backgroundVideo.addEventListener('click', function() {
        if (backgroundVideo.paused) {
            backgroundVideo.play();
        } else {
            backgroundVideo.pause();
        }
    });

    // Function to handle the scroll icon click
    var scrollIcon = document.getElementById('scroll-icon');
    scrollIcon.addEventListener('click', function(event) {
        event.preventDefault();
        var target = document.getElementById('scrolls');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Add your other event listeners and functions here...

});






document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split('/').pop();
    var desktopLinks = document.querySelectorAll('.as-as a'); // targeting links within .as-as
    var mobileLinks = document.querySelectorAll('.owe-cwccd a'); // targeting links within .owe-cwccd

    for(var i = 0; i < desktopLinks.length; i++) {
        if(desktopLinks[i].getAttribute('href') === currentPage) {
            desktopLinks[i].classList.add('active');
        }
    }

    for(var j = 0; j < mobileLinks.length; j++) {
        if(mobileLinks[j].getAttribute('href') === currentPage) {
            mobileLinks[j].classList.add('active');
        }
    }
});








function closeOverlay() {
    var overlay = document.querySelector('.overlay');
    var iframe = overlay.querySelector('iframe');

    // Set the iframe source to an empty string to stop the video
    iframe.src = '';

    // Hide the overlay
    overlay.style.display = 'none';
}




function playVideo(videoIndex) {
    var overlay = document.querySelector('.overlay');
    var iframe = overlay.querySelector('iframe');

    // Set the video URL based on the videoIndex
    var videoUrl = getVideoUrl(videoIndex);

    // Set the iframe source
    iframe.src = videoUrl + '&autoplay=1'; // Add the autoplay parameter

    // Show the overlay
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



// Add these functions to your existing JavaScript code

var currentTestimonialIndex = 0;
var testimonials = document.querySelectorAll('.testimonial-item');
var lastTestimonialIndex = testimonials.length - 1;

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

document.addEventListener('DOMContentLoaded', function () {
    showTestimonial(currentTestimonialIndex);

    document.querySelector('#prevText').addEventListener('click', function () {
        prevTestimonial();
    });
    document.querySelector('#nextText').addEventListener('click', function () {
        nextTestimonial();
    });
});









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
  
  






/* Form Validation */


const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneno = document.getElementById("phoneno").value.trim();
    const dateofevent = document.getElementById("dateofevent").value.trim();
    const eventdetails = document.getElementById("eventdetails").value.trim();
    const eventlocation = document.getElementById("eventlocation").value.trim();
    const guestcount = document.getElementById("guestcount").value.trim();
    const errorMessages = document.querySelectorAll(".sdmsd-sdc");

    // Reset error messages display
    errorMessages.forEach(msg => msg.style.display = "none");
    errorMessages[0].style.display = "none"; // Hide "Form submission failed" error

    // Reset input fields styling
    resetInputStyling();

    // Validate each field
    let hasError = false;

    if (firstname === "" && lastname === "") {
        errorMessages[1].style.display = "block"; // Show "Name is required" error
        addInputErrorStyle(document.getElementById("firstname"));
        addInputErrorStyle(document.getElementById("lastname"));
        hasError = true;
    } else {
        if (firstname === "") {
            errorMessages[2].style.display = "block"; // Show "First Name is required" error
            addInputErrorStyle(document.getElementById("firstname"));
            hasError = true;
        }
        if (lastname === "") {
            errorMessages[3].style.display = "block"; // Show "Last Name is required" error
            addInputErrorStyle(document.getElementById("lastname"));
            hasError = true;
        }
    }

    if (email === "") {
        errorMessages[4].style.display = "block"; // Show "Email Address is required" error
        addInputErrorStyle(document.getElementById("email"));
        hasError = true;
    }

    // Phone number validation
    if (phoneno === "") {
        errorMessages[5].style.display = "block"; // Show "Phone Number is required" error
        addInputErrorStyle(document.getElementById("phoneno"));
        hasError = true;
    } else if (phoneno.length < 10) {
        errorMessages[6].style.display = "block"; // Show "Give correct phone number" error
        addInputErrorStyle(document.getElementById("phoneno"));
        hasError = true;
    }

    if (dateofevent === "") {
        errorMessages[7].style.display = "block"; // Show "Date of Events is required" error
        addInputErrorStyle(document.getElementById("dateofevent"));
        hasError = true;
    }
    if (eventdetails === "") {
        errorMessages[8].style.display = "block"; // Show "Event Details is required" error
        addInputErrorStyle(document.getElementById("eventdetails"));
        hasError = true;
    }
    if (eventlocation === "") {
        errorMessages[9].style.display = "block"; // Show "Event Location is required" error
        addInputErrorStyle(document.getElementById("eventlocation"));
        hasError = true;
    }
    if (guestcount === "") {
        errorMessages[10].style.display = "block"; // Show "Approx Guest Count is required" error
        addInputErrorStyle(document.getElementById("guestcount"));
        hasError = true;
    }

    // Show "Form submission failed" error if any input error exists
    if (hasError) {
        errorMessages[0].style.display = "block";
        return;
    }

    // If no errors, call send function
    send(firstname, lastname, email, phoneno, dateofevent, eventdetails, eventlocation, guestcount);
});

// Your existing code...

function send(firstname, lname, email, phno, doe, eventd, eventl, guestc) {
    // Construct email body
    const mailc = `
        <b>Name: </b> ${firstname} ${lname}<br>
        <b>Email: </b> ${email}<br>
        <b>Phone No: </b> ${phno}<br>
        <b>Date of Event: </b> ${doe}<br>
        <b>Event Details:</b> ${eventd}<br>
        <b>Event Location:</b> ${eventl}<br>
        <b>Approx Guest Count:</b> ${guestc}
    `;

    // Send email
    Email.send({
        SecureToken: "d6ca6603-70a4-49a2-8a1a-28a557c3ae05",
        To: 'frameofboy@gmail.com',
        From: "frameofboy@gmail.com",
        Subject: "Form Submission",
        Body: mailc
    }).then(
        () => {
            console.log("Email sent successfully."); // Log success message
            // Hide the form
            form.style.display = "none";
            // Show the thank you message
            document.getElementById("thank-you-message").style.display = "block";
        }
    )
}












function addInputErrorStyle(inputElement) {
    inputElement.style.backgroundColor = "#ffeae8";
    inputElement.style.border = "1px solid #ce2c30";
}

function resetInputStyling() {
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.style.backgroundColor = "";
        input.style.border = "";
    });
}

const phoneInput = document.getElementById("phoneno");
phoneInput.addEventListener("input", function(event) {
    // Remove non-numeric characters
    let sanitizedValue = event.target.value.replace(/\D/g, '');
    // Limit length to 10 characters
    const maxLength = 10;
    sanitizedValue = sanitizedValue.slice(0, maxLength);
    
    // Format the phone number as three digits, followed by a space, three digits, followed by a space, four digits
    if (sanitizedValue.length > 6) {
        sanitizedValue = sanitizedValue.slice(0, 3) + ' ' + sanitizedValue.slice(3, 6) + ' ' + sanitizedValue.slice(6);
    } else if (sanitizedValue.length > 3) {
        sanitizedValue = sanitizedValue.slice(0, 3) + ' ' + sanitizedValue.slice(3);
    }

    // Update input value
    event.target.value = sanitizedValue;
});










