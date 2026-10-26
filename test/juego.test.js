import { describe, test, expect } from '@jest/globals';
import chooseMove from '../src/strategy.js'; 


describe('Tests del estado recibido', () => {

  test('debe retornar un objeto vacío si el estado es inválido o nulo', () => {
    const resultadoNull = chooseMove(null);
    const resultadoInvalido = chooseMove({ tablero: "no-es-array", dado: 3 });

    expect(resultadoNull).toEqual({}); 
    expect(resultadoInvalido).toEqual({});     
  });

});

describe('Test del dado', () => {
  
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

test('debe retornar un objeto vacío si el dado es menor o igual a 0', () => {
    const estadoConDadoMenorACero = {
      jugador: "A",
      dado: -2,
      tablero: Array(10).fill(Array(10).fill(""))
    };

    const resultado = chooseMove(estadoConDadoMenorACero);

    expect(resultado).toEqual({}); 
  });


});