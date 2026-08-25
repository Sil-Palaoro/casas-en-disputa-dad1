# Casas en disputa

### Integrantes
* Silvina Palaoro
* Karen
* Micaela Coradini
* Lucas Cioccale
* Alejandra Pizarro

---

## Consignas del proyecto
* Implementar en JavaScript el estado inicial del tablero 10x10.
* Crear un generador determinista de casas mediante semilla.
* Desarrollar una función que calcule los movimientos válidos.
* Ejecutar el programa utilizando Node.js.

---

## Decisiones de modelado

* **Tablero:** Tiene un tamaño de 10 filas por 10 columnas. El Jugador 1 arranca en la esquina `[0,0]` y el Jugador 2 en la esquina opuesta `[9,9]`. Es un tablero toroidal (si una ficha sale por un borde, reaparece en el lado opuesto).
* **Generación de casas:** Se ubican exactamente 5 casas neutrales. Usamos una semilla matemática para que la distribución sea determinista (con la misma semilla siempre salen en el mismo lugar). El código valida que ninguna casa caiga en la posición de salida de los jugadores y que no se superpongan entre sí.
* **Movimientos:** Las fichas se mueven en 4 direcciones (arriba, abajo, izquierda y derecha). No hay movimientos diagonales.
* **Cálculo de validez:** La función `calcularMovimientosValidos()` analiza a qué casillas puede llegar una ficha según la distancia a recorrer. No se permite terminar un turno en una casilla donde ya hay otra ficha.

---

## Ejecución

Para correr el proyecto se necesita Node.js instalado. Desde la terminal en la carpeta del proyecto, se ejecuta:

```bash
node casas.js
```

### Estructura del proyecto
```text
casas-en-disputa-dad1/
├── casas.js
└── README.md
```

---

## Ejemplos de salida

Acá se muestran tres ejecuciones con semillas diferentes para verificar que el tablero arranca vacío y las casas cambian de posición según el valor utilizado.

### EJEMPLO 1
**Semilla:** `12345`

```javascript
// Tablero inicial
[
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
]

// Ubicación de las casas
Casas: [ [ 5, 6 ], [ 9, 1 ], [ 4, 5 ], [ 0, 7 ], [ 9, 0 ] ]
```

---

### EJEMPLO 2
**Semilla:** `54321`

```javascript
// Tablero inicial
[
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
]

// Ubicación de las casas
Casas: [ [ 6, 4 ], [ 6, 5 ], [ 9, 2 ], [ 7, 4 ], [ 0, 9 ] ]
```

---

### EJEMPLO 3
**Semilla:** `2026`

```javascript
// Tablero inicial
[
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", ".", "."]
]

// Ubicación de las casas
Casas: [ [ 6, 4 ], [ 1, 9 ], [ 7, 2 ], [ 9, 1 ], [ 2, 5 ] ]
```