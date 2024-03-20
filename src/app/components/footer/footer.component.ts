import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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

  toggleMenu() {
    const menu = document.querySelector('.menu');
    if (menu) {
      menu.classList.toggle('clicked');
    }
    this.isMenuVisible = !this.isMenuVisible;
  }

}
