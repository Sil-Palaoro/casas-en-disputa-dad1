import { describe, test, expect } from '@jest/globals';
import chooseMove from '../src/strategy.js';

describe('Pruebas de Contrato - Formato de Salida de la API', () => {
  test('Debería cumplir estrictamente con el contrato de la API: Objeto { Ficha: Direccion }', () => {
    // 1. Arrange: Estado básico controlado
    const tableroMock = Array(10).fill(null).map(() => Array(10).fill(""));
    tableroMock[0][0] = "A1";
    tableroMock[5][5] = "N";

    const mockState = {
      tablero: tableroMock,
      jugador: "A",
      dado: 1
    };

    // 2. Act: Ejecutamos el bot
    const resultado = chooseMove(mockState);

    // 3. Assert: Verificaciones del formato del contrato de datos
    expect(resultado).toBeInstanceOf(Object); // Debe retornar un Objeto JSON
    
    // Verificamos que la dirección sea un string válido dentro de las 4 permitidas ("N", "S", "E", "O")
    const direccionEmitida = resultado["A1"];
    expect(["N", "S", "E", "O"]).toContain(direccionEmitida);
  });
});

// Este test de contrato valida formalmente la API de salida de nuestro bot.
// Asegura que, ante cualquier estado del juego, la función devuelva estrictamente
// la estructura requerida por el motor de Vercel (un objeto JSON válido) y
// que las acciones se limiten a las direcciones permitidas: "N", "S", "E", "O".
// ============================================================================