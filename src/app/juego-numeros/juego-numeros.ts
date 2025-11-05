import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-juego-numeros',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './juego-numeros.html',
  styleUrl: './juego-numeros.css'
})
export class JuegoNumeros {
  numeroActual: number = 0;
  mensaje: string = 'Presiona el botón';
  haGanado: boolean = false;
  intentos: number = 0;

  generarNumero() {
    this.numeroActual = Math.floor(Math.random() * 10) + 1;
    this.intentos++;
    if (this.numeroActual === 7) {
      this.mensaje = '🎉 ¡GANASTE! 🎉';
      this.haGanado = true;
    } else {
      this.mensaje = '¡Sigue intentando!';
    }
  }
}
