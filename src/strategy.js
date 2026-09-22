
export default function chooseMove(state){

    let misFichas = [];    //Coordenadas de mis fichas
    let casas = [];     //Coordenadas de las casas
    let otrasFichas = [];   //Coordenadas de las fichas del otro jugador
    let movements = {};

    function encontrarMisFichas(state) {
      for (let fila = 0; fila < state.tablero.length; fila++) {
        for (let columna = 0; columna < state.tablero[fila].length; columna++) {
          const cell = state.tablero[fila][columna];

          if (cell != "" && cell != "N" && cell.startsWith(state.jugador)) { 
            misFichas.push([fila, columna, cell]);
          }
        }
      }
    }

    function encontrarCasas(state) {
      for (let fila = 0; fila < state.tablero.length; fila++) {
        for (let columna = 0; columna < state.tablero[fila].length; columna++) {
          const cell = state.tablero[fila][columna];

          if (cell === "N") {
            casas.push([fila, columna]);
          }
        }
      }
    }

    function encontrarOtrasFichas(state) {
      for (let fila = 0; fila < state.tablero.length; fila++) {
        for (let columna = 0; columna < state.tablero[fila].length; columna++) {
          const cell = state.tablero[fila][columna];

          if (cell != "" && cell != "N" && !cell.startsWith(state.jugador)) {
            otrasFichas.push([fila, columna]);
            }
        }
      }
    }

  // Calculo de posiciones de los movimientos toroidal posibles

  function calcularPosicion(posicion, direccion, dado) {
      let fila = posicion[0];
      let columna = posicion[1];

      if (direccion === "N") {
          fila = (fila - dado + 10) % 10;
      }
    
      if (direccion === "S") {
          fila = (fila + dado) % 10;
      }
    
      if (direccion === "O") {
          columna = (columna - dado + 10) % 10;
      }
    
      if (direccion === "E") {
          columna = (columna + dado) % 10;
      }
    
      return [fila, columna];
  }

  // Funcion con los movimientos validos
  //fichasJugadores deben ser las propias y las del otro jugador

  encontrarMisFichas(state);
  encontrarOtrasFichas(state);
  encontrarCasas(state);

  let fichasJugadores = misFichas.concat(otrasFichas);

  function calcularMovimientosValidos(posicion, dado, fichasJugadores) {    
      const direcciones = [
          "N",
          "S",
          "O",
          "E"
      ];
  
      const movimientos = [];
  
      for (const direccion of direcciones) {
          const nuevaPosicion =
              calcularPosicion(posicion, direccion, dado);
  
          const ocupada = fichasJugadores.some(
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
  
  const distEntreFichaYCasa = ( ficha, casa) => {
    let filaFicha = ficha[0];
    let filaCasa = casa[0];

    let columnaFicha = ficha[1]; 
    let columnaCasa = casa[1];
    
    //Para calcular la distancia entre dos fichas en un tablero toroidal, se calcula el minimo de la diferencia entre las filas ( o columnas) y el ancho ( o alto) y la diferencia de solo las filas.
    
    let valorMinimoFilas = Math.min(Math.abs(filaFicha - filaCasa), 10 - Math.abs(filaFicha - filaCasa)); 
    let valorMinimoColumnas = Math.min(Math.abs(columnaFicha - columnaCasa), 10 - Math.abs(columnaFicha - columnaCasa)); 

    return valorMinimoFilas + valorMinimoColumnas;
  };

// [{direccion: "N", posicion: [3, 5]}, {direccion: "S", posicion: [7,4]}, {direccion: "O", posicion: [2,6]}, {direccion: "E", posicion: [1,8]},]


  for (let i=0; i < misFichas.length; i++) {

      let posicionFicha =  [misFichas[i][0], misFichas[i][1]];

      let movimientosValidos = calcularMovimientosValidos(posicionFicha, state.dado, fichasJugadores);

      let movimientoYDistancia = [];

      for(let j=0; j < movimientosValidos.length; j++) {        

        for(let c=0; c < casas.length; c++) {

          movimientoYDistancia.push({
            movimiento: movimientosValidos[j].posicion,
            distancia: distEntreFichaYCasa(movimientosValidos[j].posicion, casas[c])
          });         
        }         
      }
      
      // Para una ficha tengo movimientoYDistancia = [{movimiento: [5, 6], distancia: 5}, {movimiento: [3, 7], distancia: 4}]
        
      let distancias = [];

      for(let m = 0; m < movimientoYDistancia.length; m++) {
        distancias.push(movimientoYDistancia[m].distancia);
      }
      
      const minimaDistancia = distancias.reduce((min, val) => (val < min ? val : min));
      const mejorMovimiento = movimientoYDistancia.find(item => item.distancia === minimaDistancia);

      //Necesito dar la ficha y direccion, que cumpla que la posicion de esa direccion dentro de movimientosValidos, 
      // sea igual a el movimiento dentro de mejorMovimiento


      // Quiero movimientosValidos[].direccion
      // que cumpla movimientosValidos.posicion === mejorMovimiento.movimiento

      let mejorMovimientoValido = movimientosValidos.find(
        movimiento => 
          movimiento.posicion[0] === mejorMovimiento.movimiento[0] &&
          movimiento.posicion[1] === mejorMovimiento.movimiento[1]
      );

      let direccionMejorJugada = mejorMovimientoValido.direccion;


      let fichaActual = state.jugador + (i +1);
      
      Object.assign(movements, { [fichaActual]: direccionMejorJugada})

  }

  // Debemos devolver {"A1": "N", "A2": "S"}
    return movements;
};



    //Prueba de movimiento con una sola dirección
  // for (const row of state.tablero) {
  //   for (const cell of row) {
  //     if (cell.startsWith(state.jugador)) Object.assign(movements, { [cell]: "N"});
  //   }
  // }