import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router'; // <-- 1. Importar el provideRouter
import { routes } from './app.routes'; // <-- 2. Importar tus rutas
import { AppComponent } from './app'; // <-- 3. Importar el nombre correcto (AppComponent)

describe('AppComponent', () => { // <-- 4. Usar el nombre correcto
  let fixture: ComponentFixture<AppComponent>; // <-- 5. Tipar con el nombre correcto
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // <-- 6. Usar el nombre correcto
      providers: [
        provideZonelessChangeDetection(),
        provideRouter(routes) // <-- 7. Proveer las rutas al entorno de testing
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent); // <-- 8. Usar el nombre correcto
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // --- Test Corregido ---
  // El test original buscaba un 'h1' que ya no existe.
  // Este nuevo test comprueba que la barra de navegación exista.
  it('should render the navigation bar with two links', () => {
    fixture.detectChanges(); // Renderizar el componente
    
    // Buscar todos los 'a' dentro de 'nav'
    const links = compiled.querySelectorAll('nav a.nav-link');

    expect(links.length).toBe(2); // Asegurarse de que hay 2 links
    expect(links[0].textContent).toContain('Inicio'); // Probar el texto del primer link
    expect(links[1].textContent).toContain('Juego de Números'); // Probar el texto del segundo link
  });
});