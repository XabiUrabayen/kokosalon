// Array con las rutas de las imágenes que se mostrarán en el carrusel
var imagenes = [
  "imagenes/imagen-galeria-1.jpeg",
  "imagenes/imagen-galeria-2.jpeg",
  "imagenes/imagen-galeria-3.jpeg",
  "imagenes/imagen-galeria-4.jpeg",
  "imagenes/imagen-galeria-5.jpeg",
];

// Índice actual de la imagen que se está mostrando
var index = 0;

// Variable para guardar el identificador del intervalo (setInterval)
var intervalId;

// Cuando la página termina de cargar, se inicia automáticamente el carrusel
window.onload = function () {
  empezarCarrusel();
};

// Función para mostrar la siguiente imagen
function imagenSiguiente() {
  if (index < imagenes.length - 1) {
    cambiarImagen(index + 1); // pasa a la siguiente
  } else {
    cambiarImagen(0); // si está en la última, vuelve a la primera
  }
}

// Función para mostrar la imagen anterior
function imagenAnterior() {
  if (index > 0) {
    cambiarImagen(index - 1); // retrocede una posición
  } else {
    cambiarImagen(imagenes.length - 1); // si está en la primera, va a la última
  }
}

// Función que cambia la imagen según el índice recibido
function cambiarImagen(newIndex) {
  index = newIndex;
  if (index > imagenes.length - 1) {
    index = 0; // seguridad: si se pasa del límite, vuelve al inicio
  }
  document.getElementById('imagen').src = imagenes[index]; // cambia el src de la etiqueta <img>
}

// Función que inicia el carrusel automático
function empezarCarrusel() {
  intervalId = setInterval(function () {
    cambiarImagen(index + 1); // cada 2 segundos avanza una imagen
  }, 2000);
}

// Al pasar el ratón por encima de la imagen, se detiene el carrusel automático
document.getElementById("imagen").addEventListener("mouseover", function() {
    clearInterval(intervalId);
});

// Al quitar el ratón de la imagen, el carrusel vuelve a empezar
document.getElementById("imagen").addEventListener("mouseout", function() {
    empezarCarrusel();
});
