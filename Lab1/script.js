function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (name === "") {
        alert("Name cannot be empty!");
        return;
    }

    if (email === "") {
        alert("Email cannot be empty!");
        return;
    }

    if (password === "") {
        alert("Password cannot be empty!");
        return;
    }

    if (phone === "") {
        alert("Phone cannot be empty!");
        return;
    }

    alert("Registration Successful!");
}
