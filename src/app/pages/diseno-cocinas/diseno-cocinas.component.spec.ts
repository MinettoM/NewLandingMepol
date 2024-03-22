import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoCocinasComponent } from './diseno-cocinas.component';

describe('DisenoCocinasComponent', () => {
  let component: DisenoCocinasComponent;
  let fixture: ComponentFixture<DisenoCocinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisenoCocinasComponent]
    });
    fixture = TestBed.createComponent(DisenoCocinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
