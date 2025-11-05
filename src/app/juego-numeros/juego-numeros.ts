import { Component, signal, computed } from '@angular/core'; // <-- Paso 2: Importar signals
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // <-- ¡Importante! Para [class] y *ngIf

@Component({
  selector: 'app-juego-numeros',
  standalone: true,
  imports: [RouterLink, CommonModule], // <-- Añadir CommonModule
  templateUrl: './juego-numeros.html',
  styleUrl: './juego-numeros.css'
})
export class JuegoNumeros {
  
  // --- Paso 3: Convertir variables a Signals ---
  numeroActual = signal(0);
  mensaje = signal('🎲 Presiona el botón para empezar');
  intentos = signal(0);
  haGanado = signal(false);

  // Signal computado (se actualiza solo)
  estadoJuego = computed(() => {
    if (this.haGanado()) return '🎉 ¡GANASTE!';
    if (this.intentos() === 0) return '🎮 ¡Listo para jugar!';
    return `🎯 Intento ${this.intentos()}`;
  });

  // --- Paso 4: Actualizar métodos ---
  generarNumero() {
    // No hacer nada si ya ganó
    if (this.haGanado()) return;

    const nuevoNumero = Math.floor(Math.random() * 10) + 1;

    this.numeroActual.set(nuevoNumero);
    this.intentos.update(i => i + 1); // Así se actualiza un contador

    if (nuevoNumero === 7) {
      this.mensaje.set('🎉 ¡INCREÍBLE! ¡Obtuviste el 7! 🎉');
      this.haGanado.set(true);
    } else if (nuevoNumero > 7) {
      this.mensaje.set('📈 ¡Muy alto! El 7 es menor');
    } else {
      this.mensaje.set('📉 ¡Muy bajo! El 7 es mayor');
    }
  }

  reiniciarJuego() {
    this.numeroActual.set(0);
    this.mensaje.set('🎲 Presiona el botón para empezar');
    this.intentos.set(0);
    this.haGanado.set(false);
  }
}