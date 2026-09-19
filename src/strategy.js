
export default function chooseMove(state){

    console.log(state);

    let fichas = [];
    let directions = ["N", "S", "E", "O"]


    // Generador de movimiento

    let direction = "";

    const movements = {};

    for (const row of state.tablero) {
      for (const cell of row) {
        if (cell != "" && cell != "N" && cell.startsWith(state.jugador)) 
          fichas.push({ row, cell });
      }
    }

    return movements;
};