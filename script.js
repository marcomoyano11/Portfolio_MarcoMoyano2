const cartelCursor = document.getElementById('cursor-personalizado');

fetch('proyectos.json')
  .then(response => response.json())
  .then(proyectos => {
    proyectos.forEach(proyecto => {
      // Buscamos el contenedor correspondiente usando el nombre de la categoría del JSON
      const contenedorEspecifico = document.getElementById(`categoria-${proyecto.categoria}`);
      
      // Si el contenedor existe en el HTML, creamos y añadimos la tarjeta
      if (contenedorEspecifico) {
        const enlace = document.createElement('a');
        enlace.href = proyecto.enlace;
        enlace.className = `${proyecto.clase} zoom`;

        const imagen = document.createElement('img');
        imagen.src = proyecto.imagen;
        imagen.className = proyecto.clase;
        imagen.alt = proyecto.alt;

        enlace.appendChild(imagen);
        contenedorEspecifico.appendChild(enlace);

        // Eventos del cursor personalizado
        enlace.addEventListener('mouseenter', () => {
          cartelCursor.classList.add('activo'); 
        });

        enlace.addEventListener('mouseleave', () => {
          cartelCursor.classList.remove('activo'); 
        });
      }
    });

    // Código inteligente: Oculta los títulos (H2) de las categorías que no tienen proyectos aún
    document.querySelectorAll('.contenedor-proyectos').forEach(contenedor => {
      if (contenedor.children.length === 0) {
        contenedor.parentElement.style.display = 'none'; 
      }
    });
  })
  .catch(error => console.error('Error al cargar los proyectos:', error));

// Movimiento del cursor personalizado
window.addEventListener('mousemove', (evento) => {
  cartelCursor.style.left = `${evento.clientX}px`;
  cartelCursor.style.top = `${evento.clientY}px`;
});
