import {calcularMovimientosValidos} from "./index.js";

export default function chooseMove(state){

    let fichas = [];    //Coordenadas de mis fichas
    let casas = [];     //Coordenadas de las casas
    let otrasFichas = [];   //Coordenadas de las fichas del otro jugador
    let directions = ["N", "S", "E", "O"]   //Direcciones posibles

    let direction = "";

    const movements = {};

    function encontrarMisFichas(state) {
      for (const row of state.tablero) {
        for (const cell of row) {
          if (cell != "" && cell != "N" && cell.startsWith(state.jugador)) 
            fichas.push({ row, cell });
        }
      }
    }

    function encontrarCasas(state) {
      for (const row of state.tablero) {
        for (const cell of row) {
          if (cell === "N") 
            casas.push([row, cell]);
        }
      }
    }

    function encontrarOtrasFichas(state) {
      for (const row of state.tablero) {
        for (const cell of row) {
          if (cell != "" && cell != "N" && !cell.startsWith(state.jugador)) 
            otrasFichas.push({ row, cell });
        }
      }
    }

    // let movimientosValidos = calcularMovimientosValidos(posicionFicha, state.dado, fichas);

    const distEntreFichaYCasa = ( ficha, casa) => {
      let filaFicha = ficha.row;
      let filaCasa = casa.row;
      let columnaFicha = ficha.cell; 
      let columnaCasa = casa.cell;

      distanciaFilas = Math.abs(filaFicha - filaCasa) 
      distanciaColumna = Math.abs(columnaFicha - columnaCasa)

      return distanciaFilas + distanciaColumna;
    };


    //Prueba de movimiento con una sola dirección
  for (const row of state.tablero) {
    for (const cell of row) {
      if (cell.startsWith(state.jugador)) Object.assign(movements, { [cell]: "N"});
    }
  }

    return movements;
};