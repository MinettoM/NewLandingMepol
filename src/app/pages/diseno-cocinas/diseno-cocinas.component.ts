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
}
