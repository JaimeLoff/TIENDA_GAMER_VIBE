/* =========================
   Funciones de Validación Reutilizables
   ========================= */
const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

/* =========================
   Validación del Formulario de Registro
   ========================= */
const registroForm = document.getElementById('registroForm');
if (registroForm) {
    registroForm.addEventListener('submit', function (event) {
        let isValid = true;
        event.preventDefault();

        // Obtener campos
        const usernameInput = document.getElementById('floatingUsername');
        const emailInput = document.getElementById('floatingEmail');
        const passwordInput = document.getElementById('floatingPassword');
        const confirmPasswordInput = document.getElementById('floatingConfirmPassword');

        // Limpiar clases de validación
        registroForm.querySelectorAll('.form-control').forEach(el => {
            el.classList.remove('is-invalid');
        });

        // Validar Nombre de Usuario
        if (usernameInput.value.trim() === '') {
            usernameInput.classList.add('is-invalid');
            isValid = false;
        }

        // Validar Correo Electrónico
        if (!isValidEmail(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        }

        // Validar Contraseña
        if (passwordInput.value.length < 8) {
            passwordInput.classList.add('is-invalid');
            isValid = false;
        }

        // Validar Confirmación de Contraseña
        if (passwordInput.value !== confirmPasswordInput.value || confirmPasswordInput.value.length < 8) {
            confirmPasswordInput.classList.add('is-invalid');
            isValid = false;
        }

        // Mostrar alerta de éxito si es válido
        if (isValid) {
            Swal.fire({
                icon: 'success',
                title: '¡Registro exitoso!',
                text: 'Redirigiendo a la tienda...',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                window.location.href = 'Game_Vibe_Store.html';
            });
        }
    });
}

/* =========================
   Validación del Formulario de Login
   ========================= */
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        let isValid = true;
        event.preventDefault();

        // Obtener campos
        const emailInput = document.getElementById('floatingEmail');
        const passwordInput = document.getElementById('floatingPassword');

        // Limpiar clases de validación
        loginForm.querySelectorAll('.form-control').forEach(el => {
            el.classList.remove('is-invalid');
        });

        // Validar Correo Electrónico
        if (!isValidEmail(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        }

        // Validar Contraseña
        if (passwordInput.value.trim() === '') {
            passwordInput.classList.add('is-invalid');
            isValid = false;
        }

        // Mostrar alerta de éxito si es válido
        if (isValid) {
            Swal.fire({
                icon: 'success',
                title: '¡Inicio de sesión exitoso!',
                text: 'Redirigiendo a la tienda...',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                window.location.href = 'Game_Vibe_Store.html';
            });
        }
    });
}