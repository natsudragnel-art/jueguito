let escenaActual = 1;

// Función para cargar la escena actual
function cargarEscena() {
  // Obtener la descripción y opciones de la escena actual
  let descripcion = obtenerDescripcionEscena(escenaActual);
  let opciones = obtenerOpcionesEscena(escenaActual);

  // Mostrar la descripción y opciones en la pantalla
  document.getElementById("titulo").innerHTML = `Escena ${escenaActual}`;
  document.getElementById("descripcion").innerHTML = descripcion;
  document.getElementById("opciones").innerHTML = "";

  // Agregar las opciones a la pantalla
  opciones.forEach((opcion) => {
    let boton = document.createElement("button");
    boton.classList.add("opcion");
    boton.innerHTML = opcion.texto;
    boton.onclick = () => {
      escenaActual = opcion.siguienteEscena;
      cargarEscena();
    };
    document.getElementById("opciones").appendChild(boton);
  });
}

// Función para obtener la descripción de una escena
function obtenerDescripcionEscena(escena) {
  // Descripciones de las escenas
  let descripciones = {
    1: "Estás en un bosque mágico. Ves un camino que se bifurca en dos direcciones.",
    2: "Sigues el camino de la izquierda. Ves un río que fluye suavemente.",
    3: "Sigues el camino de la derecha. Ves una montaña que se eleva hacia el cielo.",
  };

  return descripciones[escena];
}

// Función para obtener las opciones de una escena
function obtenerOpcionesEscena(escena) {
  // Opciones de las escenas
  let opciones = {
    1: [
      { texto: "Seguir el camino de la izquierda", siguienteEscena: 2 },
      { texto: "Seguir el camino de la derecha", siguienteEscena: 3 },
    ],
    2: [
      { texto: "Beber del río", siguienteEscena: 4 },
      { texto: "Seguir el río", siguienteEscena: 5 },
    ],
    3: [
      { texto: "Subir la montaña", siguienteEscena: 6 },
      { texto: "Bajar la montaña", siguienteEscena: 7 },
    ],
  };

  return opciones[escena];
}

// Cargar la