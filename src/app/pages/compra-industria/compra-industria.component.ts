import { Component } from '@angular/core';
import 'aframe';

@Component({
  selector: 'app-compra-industria',
  templateUrl: './compra-industria.component.html',
  styleUrls: ['./compra-industria.component.scss']
})
export class CompraIndustriaComponent {
  colors: string[] = [
    '#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'
  ];

  selectedColor = this.colors[0];
}
