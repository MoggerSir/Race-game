# Carreras Clandestinas de Gokus

Este proyecto es una aplicación web interactiva que simula una carrera entre diferentes versiones de Goku. Los usuarios pueden personalizar los nombres de los corredores y observar cómo avanzan aleatoriamente hacia una meta definida.

![Carreras Clandestinas de Gokus Preview](img/fotoDelReadme.png)

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica del sitio configurada en español (`lang="es"`).
- **CSS3**: Diseño visual, animaciones y uso de variables para un tema oscuro dinámico.
- **JavaScript (Vanilla)**: Lógica de la carrera, manipulación del DOM y creación dinámica de elementos, encapsulada con mejores prácticas.

## Cómo Funciona el JavaScript

El núcleo de la interactividad se basa en tres pilares fundamentales:

### 1. Encapsulamiento con IIFE

Para proteger el alcance global y seguir las mejores prácticas de desarrollo, todo el código se encuentra envuelto en una **IIFE (Immediately Invoked Function Expression)**:

```javascript
(() => {
  // El código vive aquí de forma segura
})();
```

### 2. Creación Dinámica de Elementos (Uso de Objetos)

Para evitar la repetición de código en el HTML y hacer el proyecto escalable, se implementó la función `CrearElemento`. Esta función utiliza un **objeto** para definir los atributos de la etiqueta HTML:

```javascript
const CrearElemento = (etiqueta, objeto = {}) => {
  const creador = document.createElement(etiqueta);
  Object.entries(objeto).forEach(([tiket, valor]) => {
    if (tiket === "classList") creador.classList.add(...[].concat(valor));
    else creador[tiket] = valor;
  });
  return creador;
};
```

**Explicación:**

- Recibe la `etiqueta` (ej. 'img', 'h2') y un `objeto` con propiedades.
- Itera sobre las entradas del objeto usando `Object.entries`.
- Maneja de forma especial `classList` para permitir múltiples clases mediante el método `.add()`.
- Retorna el elemento listo para ser insertado en el DOM con `append()`.

### 3. Lógica de Movimiento y Estado

- **Movimiento Aleatorio**: Se utiliza `setInterval` y `Math.random()` para simular el avance de los personajes.
- **Gestión de Ganadores**: Al llegar a la meta (1000px), el sistema detiene los procesos y resalta al ganador.
- **Personalización**: Permite al usuario asignar nombres a los competidores a través de inputs generados dinámicamente.

## HTML y CSS

### Estructura HTML

Se diseñó una estructura limpia con un `header` para los controles y una `conteiner` que alberga los carriles de la carrera. Se minimizaron los elementos estáticos, dejando que JavaScript genere los componentes repetitivos.

### Estilo CSS

- **Arquitectura de Color**: Se utilizaron **CSS Variables** (`:root`) para definir una paleta de colores coherente (Naranja Goku, Azul Ki, Negro profundo).
- **Layout**: Uso de `Flexbox` para alinear los controles y los carriles de forma responsiva.
- **Animaciones**: Se aplicaron `transitions` para que el movimiento de los personajes y los cambios en la interfaz sean fluidos.
