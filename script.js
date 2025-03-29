$(document).ready(function () {
    $("#successModal").hide(); 
    $("#btn-login").click(function (e) {
        e.preventDefault();

        let isValid = true;
        
        let firstName = $("#firstName").val().trim();
        let lastName = $("#lastName").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();
        let confirmPassword = $("#confirmPassword").val().trim();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        $(".error").text("");

        if (firstName === "") {
            $("#errorFirstName").text("First Name tidak boleh kosong!");
            isValid = false;
        }
        else if (lastName === "") {
            $("#errorLastName").text("Last Name tidak boleh kosong!");
            isValid = false;
        }
        else if (email === "" || !emailPattern.test(email)) {
            $("#errorEmail").text("Email tidak valid!");
            isValid = false;
        }
        else if (password === "") {
            $("#errorPassword").text("Password tidak boleh kosong!");
            isValid = false;
        }
        else if (password.length < 8) {
            $("#errorPassword").text("Password minimal 8 karakter!");
            isValid = false;
        }
        else if (confirmPassword === "") {
            $("#errorConfirmPassword").text("Konfirmasi Password harus diisi!");
            isValid = false;
        }
        else if (password !== confirmPassword) {
            $("#errorConfirmPassword").text("Password tidak cocok!");
            isValid = false;
        }

        if (isValid) {
            $("#successModal").fadeIn();
        }
    });

    $("#closeModal").click(function () {
        $("#successModal").fadeOut();
    });
});
