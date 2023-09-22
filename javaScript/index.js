document.addEventListener("DOMContentLoaded", function () {
    function validacion() {
        const submitButton = document.getElementById("loginButton");
    
        submitButton.addEventListener("click", function (event) {
            event.preventDefault();
    
            const nombre = document.getElementById("Name");
            const apellido = document.getElementById("LastName");
            const email = document.getElementById("Email");
            const password = document.getElementById("Password");
            const repitePassword = document.getElementById("RepitePassword");
    
            const nameError = document.getElementById("NameError");
            const lastNameError = document.getElementById("LastNameError");
            const emailError = document.getElementById("EmailError");
            const passwordError = document.getElementById("PasswordError");
            const repitePasswordError = document.getElementById("RepitePasswordError");
    
            nameError.textContent = "";
            lastNameError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";
            repitePasswordError.textContent = "";
    
            const nameRegla = /^[A-Za-z]+$/;
            const emailRegla = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (nombre.value.trim() === "") {
                nameError.textContent = "Nombre inválido";
                return;
            } else if (!nameRegla.test(nombre.value.trim())) {
                nameError.textContent = "El nombre no debe contener números";
                return;
            } else if (nombre.value.trim().length < 3) {
                nameError.textContent = "El nombre debe tener al menos 3 caracteres";
                return;
            }
    
            if (apellido.value.trim() === "") {
                lastNameError.textContent = "Apellido inválido";
                return;
            } else if (!nameRegla.test(apellido.value.trim())) {
                lastNameError.textContent = "El apellido no debe contener números";
                return;
            } else if (apellido.value.trim().length < 3) {
                lastNameError.textContent = "El apellido debe tener al menos 3 caracteres";
                return;
            }
    
            if (email.value.trim() === "") {
                emailError.textContent = "Email inválido";
                return;
            } else if (!emailRegla.test(email.value.trim())) {
                emailError.textContent = "Por favor, introduce un correo electrónico válido";
                return;
            }
    
            if (password.value.length < 6) {
                passwordError.textContent = "Contraseña debe tener al menos 6 caracteres";
                return;
            }
    
            if (password.value !== repitePassword.value) {
                repitePasswordError.textContent = "Las contraseñas no coinciden";
                return;
            }
            alert("Formulario enviado correctamente");
            const form = document.getElementById("loginForm");
            form.submit();
        });
    }
    function blurFocusOso(){
        const passwordInput = document.getElementById("Password");
        const RepitePasswordInput = document.getElementById("RepitePassword");
        const ositoImage1 = document.getElementById("imgAnimate1");
        const ositoImage2 = document.getElementById("imgAnimate2");
    
        passwordInput.addEventListener("focus", () => {
            ositoImage1.classList.toggle("hidden");
            ositoImage2.classList.toggle("hidden");
        });
        RepitePasswordInput.addEventListener("focus", () => {
            ositoImage1.classList.toggle("hidden");
            ositoImage2.classList.toggle("hidden");
        });
        passwordInput.addEventListener("blur", () => {
            ositoImage1.classList.toggle("hidden");
            ositoImage2.classList.toggle("hidden");
        });
        RepitePasswordInput.addEventListener("blur", () => {
            ositoImage1.classList.toggle("hidden");
            ositoImage2.classList.toggle("hidden");
        });
    };

    
    blurFocusOso();
    validacion();
});
