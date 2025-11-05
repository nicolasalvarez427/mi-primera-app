import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- 1. Importar

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CommonModule], // <-- 2. Añadir aquí
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class ContadorComponent {
  @Input() titulo: string = 'Contador';
  @Input() valorInicial: number = 0;
  @Input() maximo: number = 10;
  
  @Output() cambioValor = new EventEmitter<number>();
  
  valor: number = 0;
  
  ngOnInit() {
    this.valor = this.valorInicial;
  }
  
  incrementar() {
    if (this.valor < this.maximo) {
      this.valor++;
      this.cambioValor.emit(this.valor);
    }
  }
  
  decrementar() {
    if (this.valor > 0) {
      this.valor--;
      this.cambioValor.emit(this.valor);
    }
  }
  
  reiniciar() {
    this.valor = this.valorInicial;
    this.cambioValor.emit(this.valor);
  }
}