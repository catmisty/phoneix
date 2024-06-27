document.getElementById("consultation-form").addEventListener("submit", function(event) {
    event.preventDefault();
    sendEmail();
});

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var message = document.getElementById("message").value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "saarthi525@gmail.com",
        Password: "3DA0682E5F5C9524268794B3860CDAB75429",
        To: 'saarthi525@gmail.com',
        From: "saarthi525@gmail.com",
        Subject: "New Consultation Request",
        Body: `Name: ${name} <br> Email: ${email} <br> Preferred Date: ${date} <br> Message: ${message}`
    }).then(
        message => {
            console.log(message); // Log the response message
            if (message === 'OK') {
                document.getElementById("success-message").style.display = "block";
                document.getElementById("consultation-form").reset(); // Optional: Reset the form
            } else {
                alert("Failed to send email: " + message);
            }
        }
    ).catch(
        error => {
            console.error("Failed to send email:", error);
            alert("Failed to send email: " + error);
        }
    );
}


