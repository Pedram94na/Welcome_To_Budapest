function sendEmail(event) {
    event.preventDefault();
    
    let selectedRole = document.querySelector('input[name="role"]:checked');

    if (!selectedRole) {
        alert("Requirement: Please select a role.");
        return;
    }

    let role = selectedRole.value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (!validateEmail(email))
    {
        alert("ERROR: Invalid email.");
        return;
    }

    let message = document.getElementById("message").value;
    let check = document.getElementsByName("check")[0].checked;

    if (!name || !email || !message)
    {
        alert("Requirement: fill out all fields!");
        return;
    }

    if (!check)
    {
        alert("Requirement: Check the checkbox!");
        return;
    }


    let mailtoLink = "mailto:pedram94na@gmail.com?body=" +
    "role=" + encodeURIComponent(role) +
    "&name=" + encodeURIComponent(name) +
    "&email=" + encodeURIComponent(email) +
    "&message=" + encodeURIComponent(message) +
    "&check=" + (check ? "on" : "off");

    window.location.href = mailtoLink;
    alert("Your email has been sent. Thank you!");
    document.getElementById("myForm").reset();
}

function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}