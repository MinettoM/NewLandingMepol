import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraIndustriaComponent } from './compra-industria.component';

describe('CompraIndustriaComponent', () => {
  let component: CompraIndustriaComponent;
  let fixture: ComponentFixture<CompraIndustriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompraIndustriaComponent]
    });
    fixture = TestBed.createComponent(CompraIndustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
