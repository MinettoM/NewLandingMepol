import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-marcas-exclusivas',
  templateUrl: './marcas-exclusivas.component.html',
  styleUrls: ['./marcas-exclusivas.component.scss']
})
export class MarcasExclusivasComponent {
  hidden: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const element = document.querySelector('.fade-out');
    if (element) {
      const position = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight * 0.75) {
        this.hidden = true;
      } else {
        this.hidden = false;
      }
    }
  }
}
