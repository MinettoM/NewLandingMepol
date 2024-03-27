import { Component } from '@angular/core';

@Component({
  selector: 'app-diseno-cocinas',
  templateUrl: './diseno-cocinas.component.html',
  styleUrls: ['./diseno-cocinas.component.scss']
})
export class DisenoCocinasComponent {

  colors: string[] = [
    '#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'
  ];

  selectedColor = this.colors[0];

  title = 'NewLanding';
  isMenuVisible: boolean = false;

  selectedImage: string;
  producto4Clicked: boolean = false;
  productPreviewVisible: boolean = false;

  constructor() {
    // Establecer una imagen predeterminada al cargar el componente
    this.selectedImage = 'assets/img/producto1.png';
  }

  toggleProductPreview() {
    if (this.producto4Clicked) {
      this.productPreviewVisible = !this.productPreviewVisible;
    }
  }

  showImage(imageUrl: string) {
    if (imageUrl === 'assets/img/producto4.png') {
      this.producto4Clicked = true;
      // Puedes establecer el color seleccionado aquí si es necesario
      // this.selectedColor = 'algun_color';
      this.productPreviewVisible = true; // Mostrar el componente cuando se hace clic
    } else {
      this.producto4Clicked = false;
      this.selectedImage = imageUrl;
      this.productPreviewVisible = false; // Ocultar el componente cuando se hace clic en otras imágenes
    }
  }
}
