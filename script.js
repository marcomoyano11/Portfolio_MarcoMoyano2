const contenedor = document.getElementById('contenedor-portafolio');

const cartelCursor = document.getElementById('cursor-personalizado');

fetch('proyectos.json')
  .then(response => response.json())
  .then(proyectos => {
    proyectos.forEach(proyecto => {
      const enlace = document.createElement('a');
      enlace.href = proyecto.enlace;
      enlace.className = `${proyecto.clase} zoom`;

      const imagen = document.createElement('img');
      imagen.src = proyecto.imagen;
      imagen.className = proyecto.clase;
      imagen.alt = proyecto.alt;

      enlace.appendChild(imagen);
      contenedor.appendChild(enlace);

     
      enlace.addEventListener('mouseenter', () => {
        cartelCursor.classList.add('activo'); 
      });

      
      enlace.addEventListener('mouseleave', () => {
        cartelCursor.classList.remove('activo'); 
      });
    });
  })
  .catch(error => console.error('Error al cargar los proyectos:', error));




window.addEventListener('mousemove', (evento) => {
  
  cartelCursor.style.left = `${evento.clientX}px`;
  cartelCursor.style.top = `${evento.clientY}px`;
});