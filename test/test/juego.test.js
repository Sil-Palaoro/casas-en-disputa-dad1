import { describe, test, expect } from '@jest/globals';
import chooseMove from '../../src/ia.js'; // Ajusta la ruta si tu archivo se llama index.js o server.js

describe('Pruebas Unitarias - Bot de Casas', () => {
  
  test('Debería retornar un objeto vacío si el dado es cero', () => {
    // 1. Arrange
    const mockState = { 
      tablero: [], 
      jugador: 'A', 
      dado: 0 
    };

    // 2. Act
    const resultado = chooseMove(mockState);

    // 3. Assert
    expect(resultado).toEqual({}); 
  });

});


//Explicación línea por línea
//import { describe, test, expect } from '@jest/globals';
//Le avisa a tu proyecto que vas a usar las herramientas oficiales de Jest para estructurar 
// la prueba y comparar los resultados.
// import chooseMove from '../../src/ia.js';
//Trae la función de tu bot al archivo de pruebas para poder pasarle datos y ver cómo reacciona.
// describe('Pruebas Unitarias - Bot de Casas', () => { ... });
//Es una carpeta virtual o contenedor. Sirve para agrupar todas 
// las pruebas de tu bot bajo un mismo título general.
// test('Debería retornar un objeto vacío si el dado es cero', () => { ... });
//Es el caso de prueba específico. El texto entre comillas describe 
// la regla de negocio que vas a evaluar. Si la prueba falla, 
// verás ese mensaje en rojo en la terminal.
// 1. Arrange (Preparar)
//Creas un estado de juego simulado en una variable llamada mockState. 
// En el código real la línea if (state.dado <= 0) return {};. 
// Por eso, aquí le pasas a propósito un dado en 0 para forzar a que se dispare esa condición.
// 2. Act (Actuar)
//Ejecutas tu función chooseMove pasándole los datos 
// simulados que acabas de preparar y guardas lo que devuelve en la variable resultado.
// 3. Assert (Afirmar)
//Es la hora de la verdad. Usas el comparador 
// expect(resultado).toEqual({}); de Jest para asegurar que 
// la función devolvió efectivamente un objeto vacío {}. Si coincide, el test se pone en verde.
