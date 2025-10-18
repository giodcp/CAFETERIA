// ------------------------------
// FILTROS
// ------------------------------
const buttons = document.querySelectorAll('.filtros button');
const items = document.querySelectorAll('.galeria article');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    items.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// ------------------------------
// BUSCADOR
// ------------------------------
document.getElementById('buscador').addEventListener('keyup', function() {
  const value = this.value.toLowerCase();
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(value) ? 'block' : 'none';
  });
});

// ------------------------------
// MODAL (VENTANA DE INFORMACIÓN)
// ------------------------------
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const modalDesc = document.getElementById("modal-desc");
const cerrarBtn = document.querySelector(".cerrar");

// ✅ Descripciones de todos los productos
const descripciones = {
  // --- Horneados ---
  "Pastel de Chocolate": "Bizcocho esponjoso cubierto con una capa cremosa de chocolate.",
  "Galletas Caseras": "Crujientes galletas de mantequilla horneadas con amor.",
  "Pay de Manzana": "Relleno de manzana con canela y una corteza dorada.",
  "Cupcakes": "Pequeños pastelitos decorados con betún de colores y chispas.",
  "Brownies": "Deliciosos cuadrados de chocolate con textura densa y suave.",
  "Panqués": "Pan suave y esponjoso, ideal para acompañar el café.",
  "Tarta de Fresa": "Base crujiente con crema y fresas frescas encima.",
  "Roles de Canela": "Rollos suaves con canela y glaseado dulce.",
  "Cheesecake": "Pastel cremoso de queso con una base de galleta dulce.",

  // --- Dulces ---
  "Caramelos de sabores": "Caramelos artesanales con sabores frutales intensos.",
  "Chocolate Artesanal": "Chocolate hecho a mano con cacao 70% de calidad.",
  "Paletas de Dulce": "Paletas de caramelo de varios sabores divertidos.",
  "Malvaviscos suaves": "Malvaviscos esponjosos cubiertos con azúcar glas.",
  "Gomitas de colores": "Gomitas frutales de sabores surtidos.",
  "Alfajores dulces": "Alfajores rellenos de dulce de leche y bañados en chocolate.",
  "Macarons": "Dulces franceses de almendra con relleno cremoso.",
  "Cake Pops": "Pastelitos en palito cubiertos de chocolate y chispas.",
  "Mazapán": "Tradicional dulce de cacahuate mexicano.",

  // --- Fritos ---
  "Churros con cajeta": "Crujientes por fuera, suaves por dentro, con relleno de cajeta.",
  "Empanadas con rellenos dulces": "Empanadas fritas con rellenos frutales o de crema pastelera.",
  "Plátanos fritos con lechera": "Plátanos dorados bañados en leche condensada.",
  "Donitas azucaradas": "Donas fritas espolvoreadas con azúcar.",
  "Buñuelos bañados en miel de guayaba": "Crujientes buñuelos con miel dulce y aromática.",
  "Pan Francés": "Rebanadas doradas con canela, azúcar y un toque de mantequilla."
};

// ------------------------------
// Activar modal al hacer clic en cualquier postre
// ------------------------------
document.querySelectorAll(".galeria article").forEach(postre => {
  postre.addEventListener("click", () => {
    const img = postre.querySelector("img").src;
    const titulo = postre.querySelector("p").textContent.trim();

    modalImg.src = img;
    modalTitulo.textContent = titulo;
    modalDesc.textContent = descripciones[titulo] || "Un postre delicioso preparado con dedicación.";

    modal.style.display = "flex";
  });
});

// ------------------------------
// Cerrar modal
// ------------------------------
cerrarBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; }

// ------------------------------
// RECETAS DE LOS POSTRES
// ------------------------------
const recetas = {
  "Pastel de Chocolate": "1. Precalienta el horno a 180°C.\n2. Mezcla harina, cacao, azúcar y huevos.\n3. Hornea por 30 min.\n4. Cubre con betún de chocolate.",
  "Galletas Caseras": "1. Bate mantequilla, azúcar y huevo.\n2. Agrega harina y forma bolitas.\n3. Hornea 15 min a 180°C.",
  "Pay de Manzana": "1. Corta manzanas y mézclalas con canela y azúcar.\n2. Coloca sobre masa.\n3. Hornea 35 min a 190°C.",
  "Churros con cajeta": "1. Hierve agua, mantequilla y harina.\n2. Forma churros y fríelos.\n3. Rellena con cajeta y espolvorea azúcar.",
  "Buñuelos bañados en miel de guayaba": "1. Prepara la masa y fríe los discos.\n2. Hierve miel con guayaba.\n3. Baña los buñuelos antes de servir.",
};

// ------------------------------
// BOTÓN “Ver receta”
// ------------------------------
const btnReceta = document.getElementById("btn-receta");
const modalReceta = document.getElementById("modal-receta");
const cerrarReceta = document.getElementById("cerrar-receta");
const tituloReceta = document.getElementById("titulo-receta");
const textoReceta = document.getElementById("texto-receta");

let postreActual = "";

// Actualiza variable cuando se abre el modal del postre
document.querySelectorAll(".galeria article").forEach(postre => {
  postre.addEventListener("click", () => {
    const titulo = postre.querySelector("p").textContent.trim();
    postreActual = titulo; // Guardar cuál postre está abierto
  });
});

// Mostrar la receta
btnReceta.addEventListener("click", () => {
  modal.style.display = "none"; // Cierra el modal anterior
  modalReceta.style.display = "flex"; // Abre el nuevo
  tituloReceta.textContent = postreActual;
  textoReceta.textContent = recetas[postreActual] || "Receta próximamente disponible 🍰";
});

// Cerrar modal de receta
cerrarReceta.onclick = () => modalReceta.style.display = "none";
window.onclick = e => {
  if (e.target == modalReceta) modalReceta.style.display = "none";
};
