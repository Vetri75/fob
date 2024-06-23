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
    errorMessages[0].style.display = "none"; 

    // Reset input fields styling
    resetInputStyling();

    let hasError = false;

    if (firstname === "" && lastname === "") {
        errorMessages[1].style.display = "block"; 
        addInputErrorStyle(document.getElementById("firstname"));
        addInputErrorStyle(document.getElementById("lastname"));
        hasError = true;
    } else {
        if (firstname === "") {
            errorMessages[2].style.display = "block"; 
            addInputErrorStyle(document.getElementById("firstname"));
            hasError = true;
        }
        if (lastname === "") {
            errorMessages[3].style.display = "block"; 
            addInputErrorStyle(document.getElementById("lastname"));
            hasError = true;
        }
    }

    if (email === "") {
        errorMessages[4].style.display = "block"; 
        addInputErrorStyle(document.getElementById("email"));
        hasError = true;
    }

    if (phoneno === "") {
        errorMessages[5].style.display = "block"; 
        addInputErrorStyle(document.getElementById("phoneno"));
        hasError = true;
    } else if (phoneno.length < 10) {
        errorMessages[6].style.display = "block"; 
        addInputErrorStyle(document.getElementById("phoneno"));
        hasError = true;
    }

    if (dateofevent === "") {
        errorMessages[7].style.display = "block"; 
        addInputErrorStyle(document.getElementById("dateofevent"));
        hasError = true;
    }
    if (eventdetails === "") {
        errorMessages[8].style.display = "block"; 
        addInputErrorStyle(document.getElementById("eventdetails"));
        hasError = true;
    }
    if (eventlocation === "") {
        errorMessages[9].style.display = "block"; 
        addInputErrorStyle(document.getElementById("eventlocation"));
        hasError = true;
    }
    if (guestcount === "") {
        errorMessages[10].style.display = "block"; 
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
            console.log("Email sent successfully."); 
           
            form.style.display = "none";
            document.getElementById("complas-sa").style.display = "none";
            
            document.getElementById("sap-con").style.display = "block";
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
    
    if (sanitizedValue.length > 6) {
        sanitizedValue = sanitizedValue.slice(0, 3) + ' ' + sanitizedValue.slice(3, 6) + ' ' + sanitizedValue.slice(6);
    } else if (sanitizedValue.length > 3) {
        sanitizedValue = sanitizedValue.slice(0, 3) + ' ' + sanitizedValue.slice(3);
    }

    event.target.value = sanitizedValue;
});