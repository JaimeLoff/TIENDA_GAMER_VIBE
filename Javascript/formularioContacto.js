// Comunas por región (5 por región)
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

function actualizarComunas() {
    const regionSelect = document.getElementById("region");
    const comunaSelect = document.getElementById("comuna");
    const region = regionSelect.value;

    // Limpiar comunas actuales
    comunaSelect.innerHTML = '<option value="" selected disabled>Seleccione la comuna</option>';

    // Agregar comunas de la región seleccionada
    if (region in comunasPorRegion) {
        comunasPorRegion[region].forEach(comuna => {
            const option = document.createElement("option");
            option.value = comuna;
            option.textContent = comuna;
            comunaSelect.appendChild(option);
        });
    }
}
