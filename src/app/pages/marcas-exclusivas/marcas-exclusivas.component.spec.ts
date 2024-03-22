import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasExclusivasComponent } from './marcas-exclusivas.component';

describe('MarcasExclusivasComponent', () => {
  let component: MarcasExclusivasComponent;
  let fixture: ComponentFixture<MarcasExclusivasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcasExclusivasComponent]
    });
    fixture = TestBed.createComponent(MarcasExclusivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
