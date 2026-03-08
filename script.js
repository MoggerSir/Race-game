(()=>{
const nombres = ['', '', '', ''];

    const CrearElemento = (etiqueta, objeto = {})=>{
        const creador = document.createElement(etiqueta);
        Object.entries(objeto).forEach(([tiket, valor])=>{
            if(tiket === 'classList')creador.classList.add(...[].concat(valor));
            else creador[tiket] = valor;
        });
        return creador;
    }

    const nab = document.querySelector('.nabIputs')

    for(let i =0; i<4; i++){
        const contenedorMotos = document.querySelector(`#contenedor${i}`);

        const gokus       = CrearElemento('img', {classList: 'goku', id: `goku${i+1}`, src: '/img/inicio.png'});
        const imagen      = CrearElemento('img', {classList: 'esfera', src: '/img/esferaDragon.png'});
        const contador    = CrearElemento('h2', {classList: 'contador', id: `ContMotos${i}`});
        const nombre      = CrearElemento('h2', {classList: 'nombres', textContent: `goku ${i+1}`});
        const inputNombre = CrearElemento('input', {classList: 'inputNombre', type: 'text', placeholder: 'Ingrese el nombre del personaje', id: `inputNombre${i+1}` });

    contenedorMotos.append(nombre, gokus , contador, imagen);
    nab.append(inputNombre);

    }

    const meta      = 1000;
    const sumas     = [0, 0, 0, 0];
    const ganador   = document.querySelector('.ganador'); 
    let   int       = 0

    const moverMoto = (goku, index, interval) => {
        if (sumas[index] >= meta) {
            clearInterval(interval);
            return;
        }

        goku.src = '/img/animacion-de-correr.gif';
        let numero = Math.floor(Math.random() * 100);
        sumas[index] += numero;
        goku.style.left = sumas[index] + 'px';

        for (let i = 0; i < 4; i++) {
            document.querySelector(`#ContMotos${index}`).textContent = sumas[index];
        }
        if (sumas[index] >= meta && int === 0) {
            int++;
            alert(`El personaje ganador fue ${document.querySelectorAll('.nombres')[index].textContent}`);
            ganador.textContent = `El ganador es ${document.querySelectorAll('.nombres')[index].textContent}`;
            goku.src = '/img/goku-dance.gif';

            intervals.forEach((iv) => clearInterval(iv));

            goku1.forEach((g) => {
                if (g.id !== goku.id) {
                    g.src = '/img/final.png';
                }
            });
        }
    };

    const botonInicio   = document.querySelector('#inicio')
    const botonReinicio = document.querySelector('#reiniciar')
    const goku1         = document.querySelectorAll('.goku');
    const inputNombre   = document.querySelectorAll('.inputNombre');
    const intervals     = [];

    botonInicio.addEventListener('click', ()=> {

        intervals.forEach((iv) => clearInterval(iv));
        intervals.length = 0;

        goku1.forEach((goku, index) => {
            const interval = setInterval(() => moverMoto(goku, index, interval), 500);
            intervals.push(interval);
        });

        inputNombre.forEach((input, i) => {
        if(input.value === undefined || input.value === '' && int===0 ){ 
        alert('Ingrese el nombre del personaje para reiniciar la carrera');
        intervals.forEach((interval) => clearInterval(interval));
        int++;
        }
        if(input.value !== undefined && int === 0){ {
            int = 0;
            nombres[i] = input.value;
            let Nombress = document.querySelectorAll('.nombres');
            Nombress.forEach((nombre, index) => {
                nombre.textContent = nombres[index];
            });
    }}
    });
        if(int > 0){int = int = 0};
    })

    botonReinicio.addEventListener('click', ()=>{
    goku1.forEach((gokus) => {gokus.src = '/img/inicio.png';})
    ganador.textContent = `El ganador es`;
    sumas.fill(0);
    intervals.forEach((interval) => clearInterval(interval));
    int = 0
    goku1.forEach((goku => {
        goku.style.left = 0 + 'px';
        for(let i = 0; i < 4; i++){document.querySelector(`#ContMotos${i}`).textContent= sumas[i] = 0;}
    }))
    })


})();