# Casas en disputa - DAD1
Estado inicial y generación de casas

El programa está realizado en JavaScript y se puede ejecutar utilizando Node.js.

El tablero tiene un tamaño de 10 filas por 10 columnas. Al comenzar, el Jugador 1 se encuentra en la posición [0,0] y el Jugador 2 en [9,9].

Las 5 casas neutrales se generan utilizando una semilla. Esto permite que, si se utiliza la misma semilla, se obtenga siempre la misma distribución de casas.

También se controla que las casas no estén en las posiciones iniciales de los jugadores y que no haya dos casas en la misma posición.

Los movimientos posibles de una ficha son arriba, abajo, izquierda y derecha. El tablero es toroidal, por lo que si una ficha sale por uno de los bordes, vuelve a aparecer por el lado contrario.

Ejemplo de salida
Ejemplo 1

Semilla utilizada:

const semilla = 12345;


Resultado obtenido:

Tablero: [
  [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ],
  [ '.', '.', '.', '.', '.', '.', '.', '.', '.', '.' ]
]

Casas: [ [ 5, 6 ], [ 9, 1 ], [ 4, 5 ], [ 0, 7 ], [ 9, 0 ] ]

Ejemplo 2

Para comprobar que la semilla modifica la distribución, se puede utilizar:

const semilla = 54321;


Resultado obtenido al ejecutar el programa:

Semilla: 54321

Casas: [ PEGAR ACÁ EL RESULTADO REAL ]

Ejemplo 3

También se puede utilizar:

const semilla = 2026;


Resultado obtenido al ejecutar el programa:

Semilla: 2026

Casas: [ PEGAR ACÁ EL RESULTADO REAL ]


Decisiones de modelado

En esta primera etapa se buscó implementar una base simple y clara para el funcionamiento del juego.

Tablero

Se utilizó un tablero de 10 x 10, representado mediante filas y columnas.

El Jugador 1 comienza en [0,0] y el Jugador 2 en [9,9], ya que son esquinas opuestas del tablero.

Generación de casas

Se generan exactamente 5 casas neutrales utilizando una semilla.

La utilización de una semilla permite que la generación sea determinista. Esto significa que utilizando la misma semilla se obtiene siempre la misma distribución de casas.

También se controla que:

ninguna casa esté en la posición inicial de un jugador;
no haya dos casas en la misma posición;
las casas tengan una distribución razonablemente equilibrada entre los jugadores.
Movimientos

Las fichas solamente pueden moverse en cuatro direcciones:

arriba;
abajo;
izquierda;
derecha.

No se permiten movimientos diagonales.

El tablero es toroidal, por lo que al atravesar un borde la ficha aparece por el lado contrario.

Movimientos válidos

La función calcularMovimientosValidos() calcula las posiciones a las que puede llegar una ficha según la cantidad de casillas que debe recorrer.

No se considera válido terminar el movimiento en una posición ocupada por otra ficha.

Ejecución con Node.js

Para ejecutar el programa se necesita tener instalado Node.js.

Desde la terminal de Visual Studio Code se puede ejecutar:

node casas.js


Si el archivo tiene otro nombre, se debe reemplazar casas.js por el nombre correspondiente.

Estructura del proyecto

El proyecto queda organizado de la siguiente manera:

casas-en-disputa-dad1/
├── casas.js
└── README.md


El archivo casas.js contiene el código del programa y README.md contiene la explicación, los ejemplos de salida y las decisiones de modelado.

## Para la semilla

const semilla = 12345;


## Obtuvimos:

Tablero:  [
  [
    '.', '.', '.', '.',
    '.', '.', '.', '.',
    '.', '.'
  ],
  [
    '.', '.', '.', '.',
    '.', '.', '.', '.',
    '.', '.'
  ],
  [
    '.', '.', '.', '.',
    '.', '.', '.', '.',
    '.', '.'
  ],
  [
    '.', '.', '.', '.',
    '.', '.', '.', '.',
    '.', '.'
  ],
  [
    '.', '.', '.', '.',
    '.', '.', '.', '.',
    '.', '.'
  ],
  [
    '.', '.', '.', '.',
    '.', '.', '.', '.',
    '.', '.'
  ],
  [
    '.', '.', '.', '.',
    '.', '.', '.', '.',
    '.', '.'
  ],
  [
    '.', '.', '.', '.',
    '.', '.', '.', '.',
    '.', '.'
  ],
  [
    '.', '.', '.', '.',
    '.', '.', '.', '.',
    '.', '.'
  ],
  [
    '.', '.', '.', '.',
    '.', '.', '.', '.',
    '.', '.'
  ]
]
Casas:  [ [ 5, 6 ], [ 9, 1 ], [ 4, 5 ], [ 0, 7 ], [ 9, 0 ] ]