import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  
  colors: string[] = [
    '#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'
  ];
  
  selectedColor = this.colors[0];

  title = 'NewLanding';
  isMenuVisible: boolean = false;

  opciones = [
    { nombre: 'Hornos Combinados', icono: 'fa-utensils' },
    { nombre: 'Mantenedores', icono: 'fa-wrench' },
    { nombre: 'Empacadoras al vacío', icono: 'fa-box' },
    { nombre: 'Sartenes volcables', icono: 'fa-utensil-spoon' },
    { nombre: 'Lavavajillas', icono: 'fa-shower' },
    { nombre: 'Abatidores', icono: 'fa-hand-paper' },
    { nombre: 'Máquinas de Hielo', icono: 'fa-icicles' },
    { nombre: 'Máquinas de Helado', icono: 'fa-ice-cream' },
    { nombre: 'Molino de Café', icono: 'fa-coffee' },
    { nombre: 'Máquinas de Café', icono: 'fa-coffee' },
    { nombre: 'PAQ', icono: 'fa-archive' },
    { nombre: 'Circulador de Inmersión', icono: 'fa-water' },
    { nombre: 'Mochilas Delivery', icono: 'fa-briefcase' },
    { nombre: 'Procesadores de Alimentos', icono: 'fa-blender' }
  ];

  // Al hacer scroll, mostrar u ocultar el botón de volver arriba
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const backToTopBtn = document.getElementById("back-to-top-btn");
    if (backToTopBtn) {
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    }
  }

  // Volver al principio de la página al hacer clic en el botón
  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
