
export default function chooseMove(state, semilla){

    console.log(state);

    let fichas = state.jugador.fichas;
    let directions = ["N", "S", "E", "O"]

    // Generador determinista mediante semilla

    function crearGenerador(semilla) {
      let s = semilla;
      return function () {
        s = (s * 1664525 + 1013904223) % 4294967296;
        return s / 4294967296;
      };
    }

    // Generador de movimiento

    const generador = crearGenerador(semilla);
    
    const fichaIndex = Math.floor(generador() * fichas.length);
    const directionIndex = Math.floor(generador() * directions.length);
    
    let fichaId = state.jugador.id + (fichaIndex + 1); 
    let direction = directions[directionIndex];
    let movement = {
        "pieceId": fichaId,
        "direction": direction
    };

    return movement;
};