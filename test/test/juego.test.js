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