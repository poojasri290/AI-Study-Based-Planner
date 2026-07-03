function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Check Empty Fields
    if (username === "" || password === "") {
        alert("Please enter Username and Password.");
        return;
    }

    // Minimum Password Length
    if (password.length < 4) {
        alert("Password must contain at least 4 characters.");
        return;
    }

    // Save Username
    localStorage.setItem("studentName", username);

    // Login Success
    alert("Login Successful!");

    // Redirect to Dashboard
    window.location.href = "index.html";
}