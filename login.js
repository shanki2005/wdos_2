document.getElementById("login_Form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    authenticateUser(username, password);
});

function authenticateUser(username, password) {
    fetch("users.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const user = data.user.find(user => user.username === username && user.password === password);
            if (user) {
                // Login successful
                document.getElementById("loginMessage").textContent = "Login successful!";
                // Redirect to dashboard based on user role
                if (user.role === 'admin') {
                    // Redirect to admin dashboard
                    window.location.href = "dashboard.html";
                } else if (user.role === 'site_user') {
                    // Redirect to site user dashboard or homepage
                    window.location.href = "index.html";
                }
            } else {
                // Login failed
                document.getElementById("loginMessage").textContent = "Invalid username or password.";
            }
        })
        .catch(error => console.error("Error loading users.json:", error));
}