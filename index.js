// CASAS EN DISPUTA

// Estado inicial y constantes

const FILAS = 10;
const COLUMNAS =10;
const CANTIDAD_CASAS = 5;

const jugador1 = {
    nombre: "Jugador 1",
    fichas: [[0, 0]],
    casasConquistadas: 0,
    fallosConsecutivos: 0,
    nuevasFichas: []
};

const jugador2 = {
    nombre: "Jugador 2",
    fichas: [[9, 9]],
    casasConquistadas: 0,
    fallosConsecutivos: 0,
    nuevasFichas: []
};



// Generación del Tablero

function crearTablero() {
    const tablero = [];

    for (let fila = 0; fila < FILAS; fila++) {
        const nuevaFila = [];

        for (let columna = 0; columna < COLUMNAS; columna++) {
            nuevaFila.push(".");
        }

        tablero.push(nuevaFila);
    }

    return tablero;
}


// Generador determinista mediante semilla

function crearGenerador(semilla) {
  let s = semilla;
  return function () {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}


// Generador de Casas
function generarCasas(semilla) {
    const generador = crearGenerador(semilla);
    const casas = [];

    while (casas.length < CANTIDAD_CASAS) {
        const fila = Math.floor(generador() * FILAS);
        const columna = Math.floor(generador() * COLUMNAS);

        const posicionOcupadaPorJugador =
            (fila === 0 && columna === 0) ||
            (fila === 9 && columna === 9);

        const posicionRepetida = casas.some(
            casa =>
                casa[0] === fila &&
                casa[1] === columna
        );

        const distJ1 = fila + columna;
        const distJ2 = (9 - fila) + (9 - columna);
        const esEquilibrada = Math.abs(distJ1 - distJ2) <= 4;


        if (!posicionOcupadaPorJugador && !posicionRepetida && esEquilibrada) {
            casas.push([fila, columna]);
        }
    }

    return casas;
}


// Calculo de posiciones de los movimientos toroidal

function calcularPosicion(posicion, direccion, cantidad) {
    let fila = posicion[0];
    let columna = posicion[1];

    if (direccion === "arriba") {
        fila = (fila - cantidad + FILAS) % FILAS;
    }

    if (direccion === "abajo") {
        fila = (fila + cantidad) % FILAS;
    }

    if (direccion === "izquierda") {
        columna = (columna - cantidad + COLUMNAS) % COLUMNAS;
    }

    if (direccion === "derecha") {
        columna = (columna + cantidad) % COLUMNAS;
    }

    return [fila, columna];
}


// Funcion con los movimientos validos

function calcularMovimientosValidos(posicion, cantidad, fichas) {    //cantidad es el valor del dado
    const direcciones = [
        "arriba",
        "abajo",
        "izquierda",
        "derecha"
    ];

    const movimientos = [];

    for (const direccion of direcciones) {
        const nuevaPosicion =
            calcularPosicion(posicion, direccion, cantidad);

        const ocupada = fichas.some(
            ficha =>
                ficha[0] === nuevaPosicion[0] &&
                ficha[1] === nuevaPosicion[1]
        );

        if (!ocupada) {
            movimientos.push({
                direccion: direccion,
                posicion: nuevaPosicion
            });
        }
    }

    return movimientos;
};

const semilla = 12345;

let tablero = crearTablero();

let casas = generarCasas(semilla);

console.log("Tablero: ",tablero);
console.log("Casas: ", casas);