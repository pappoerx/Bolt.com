document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded, script running."); // Debugging statement
    
    const form = document.getElementById('signupForm');
    console.log("Form element found:", form); // Debugging statement

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log("Submit button clicked."); // Debugging statement

        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const city = document.getElementById('city').value.trim();

        if (email === "" || phone === "" || city === "") {
            alert("Please fill out all the fields.");
            console.log("Fields not filled out."); // Debugging statement
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            console.log("Invalid email."); // Debugging statement
        } else if (!validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            console.log("Invalid phone number."); // Debugging statement
        } else {
            alert("Form successfully submitted!");
            console.log("Form is valid."); // Debugging statement
            // window.location.href = "login.html";
        }
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    return /^\d{10}$/.test(phone);
}
