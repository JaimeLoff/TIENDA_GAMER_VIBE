// Obtenemos el formulario y los campos
const form = document.getElementById('contactForm');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('contraseña');
const confirmPasswordInput = document.getElementById('Confcontra');
const telefonoInput = document.getElementById('Telefono');
const regionSelect = document.getElementById('region');
const comunaSelect = document.getElementById('comuna');
const mensajeTextarea = document.getElementById('mensaje');

// Diccionario de comunas por región
const comunasPorRegion = {
    "RM": ["Providencia", "Las Condes", "Maipú", "Puente Alto", "La Florida"],
    "Arica": ["Arica", "Camarones", "Putre", "General Lagos", "Chungara"],
    "Tarapaca": ["Iquique", "Alto Hospicio", "Pica", "Pozo Almonte", "Huara"],
    "Antofagasta": ["Calama", "Mejillones", "Taltal", "Tocopilla", "Sierra Gorda"],
    "Atacama": ["Copiapó", "Caldera", "Vallenar", "Chañaral", "Diego de Almagro"],
    "Coquimbo": ["La Serena", "Coquimbo", "Ovalle", "Illapel", "Los Vilos"],
    "Valparaiso": ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana", "San Antonio"],
    "O’Higgins": ["Rancagua", "San Fernando", "Machalí", "Pichilemu", "Santa Cruz"],
    "Maule": ["Talca", "Curicó", "Linares", "Maule", "San Javier"],
    "Ñuble": ["Chillán", "Chillán Viejo", "Bulnes", "San Carlos", "Quillón"],
    "Biobío": ["Concepción", "Talcahuano", "Los Ángeles", "Coronel", "Hualpén"],
    "Araucanía": ["Temuco", "Villarrica", "Pucón", "Loncoche", "Angol"],
    "Los Rios": ["Valdivia", "La Unión", "Mariquina", "Lanco", "Paillaco"],
    "Los Lagos": ["Puerto Montt", "Puerto Varas", "Osorno", "Castro", "Ancud"],
    "Aysén": ["Coyhaique", "Aysén", "Cisnes", "Chile Chico", "Puerto Aysén"],
    "Magallanes": ["Punta Arenas", "Puerto Natales", "Porvenir", "Puerto Williams", "Puerto Toro"]
};

// --- FUNCIÓN PARA ACTUALIZAR COMUNAS ---
function actualizarComunas() {
    const region = regionSelect.value;
    comunaSelect.innerHTML = '<option value="" selected disabled>Seleccione la comuna</option>';

    if (region && comunasPorRegion[region]) {
        comunasPorRegion[region].forEach(comuna => {
            const option = document.createElement('option');
            option.value = comuna;
            option.textContent = comuna;
            comunaSelect.appendChild(option);
        });
    }
}

// --- VALIDACIONES EN TIEMPO REAL ---

// Prevenir que se ingresen letras en el campo de teléfono
telefonoInput.addEventListener('keydown', function (e) {
    // Si la tecla presionada no es un número (0-9) y no es una tecla de control como backspace, flechas, etc.,
    // evita la acción por defecto.
    const validKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];
    if (!/^[0-9]$/.test(e.key) && !validKeys.includes(e.key)) {
        e.preventDefault();
    }
});

// --- FUNCIONES DE VALIDACIÓN ---
const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
    const re = /^\d{9}$/;
    return re.test(phone);
};

// --- MANEJO DEL FORMULARIO ---
// Escuchamos el evento de cambio en el select de la región
regionSelect.addEventListener('change', actualizarComunas);

// Escuchamos el evento de envío del formulario
form.addEventListener('submit', function (event) {
    let isValid = true;
    event.preventDefault(); // Evita que el formulario se envíe

    // Limpiar clases de validación anteriores
    form.querySelectorAll('.form-control, .form-select').forEach(el => {
        el.classList.remove('is-invalid');
    });

    // Validaciones de todos los campos
    if (nombreInput.value.trim() === '') {
        nombreInput.classList.add('is-invalid');
        isValid = false;
    }

    if (!isValidEmail(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        isValid = false;
    }

    if (passwordInput.value.length < 8) {
        passwordInput.classList.add('is-invalid');
        isValid = false;
    }

    if (passwordInput.value !== confirmPasswordInput.value || confirmPasswordInput.value.length < 8) {
        confirmPasswordInput.classList.add('is-invalid');
        isValid = false;
    }

    const phoneValue = telefonoInput.value.replace(/\s/g, '');
    if (!isValidPhone(phoneValue)) {
        telefonoInput.classList.add('is-invalid');
        isValid = false;
    }

    if (regionSelect.value === '') {
        regionSelect.classList.add('is-invalid');
        isValid = false;
    }

    if (comunaSelect.value === '') {
        comunaSelect.classList.add('is-invalid');
        isValid = false;
    }

    if (mensajeTextarea.value.trim() === '') {
        mensajeTextarea.classList.add('is-invalid');
        isValid = false;
    }

    // Si todo está correcto, muestra la alerta
    if (isValid) {
        Swal.fire({
            icon: 'success',
            title: 'Mensaje Enviado',
            text: '¡Su mensaje ha sido enviado correctamente!',
            showConfirmButton: false,
            timer: 2000
        }).then(() => {
            form.reset();
            actualizarComunas();
        });
    }
});

// Llamamos a la función al cargar la página para inicializar las comunas
document.addEventListener('DOMContentLoaded', actualizarComunas);