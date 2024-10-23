document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        const email = document.getElementById("email").value;
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        let isValid = true; 

        if (!name) {
            alert("Nama harus diisi!");
            isValid = false; 
        }
        if (!email) {
            alert("Email harus diisi!");
            isValid = false; 
        }
        if (!phone) {
            alert("Nomor Telepon harus diisi!");
            isValid = false; 
        }
        if (!message) {
            alert("Pesan harus diisi!");
            isValid = false; 
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email && !emailPattern.test(email)) {
            alert("Email tidak valid!");
            isValid = false; 
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
