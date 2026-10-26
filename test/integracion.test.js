import { describe, test, expect } from '@jest/globals';
import chooseMove from '../src/strategy.js';

describe('Pruebas de Integración - Estrategia con Semillas', () => {
  test('Caso Límite Semilla 2026: La ficha debe elegir moverse al Sur para acercarse a la casa de la semilla', () => {
    // 1. Arrange: Simulamos el tablero de la semilla 2026 con una casa en [6, 4]
    const tableroSemilla2026 = Array(10).fill(null).map(() => Array(10).fill(""));
    
    // Casa neutral fija de la semilla 2026 en la posición [6, 4]
    tableroSemilla2026[6][4] = "N"; 
    
    // Colocamos tu ficha en [4, 4] (Justo al Norte de la casa)
    tableroSemilla2026[4][4] = "A1"; 

    const mockState = {
      tablero: tableroSemilla2026,
      jugador: "A",
      dado: 2 // El dado da la distancia exacta para avanzar de la fila 4 a la 6
    };

    // 2. Act: Ejecutamos tu estrategia pura
    const resultado = chooseMove(mockState);

    // 3. Assert: Tu algoritmo de distancia mínima debería decidir ir hacia el Sur ("S")
    expect(resultado["A1"]).toBe("S");
  });
});

// Este test de integración verifica el caso límite asignado para la "Semilla 2026".
// Valida que la matriz del tablero toroidal, las distancias matemáticas y la
// función 'chooseMove' de 'strategy.js' interactúen correctamente en conjunto, 
// asegurando que el bot elija la dirección óptima ("S") para alcanzar la casa.
// ============================================================================