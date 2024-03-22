import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoCosinasComponent } from './diseno-cosinas.component';

describe('DisenoCosinasComponent', () => {
  let component: DisenoCosinasComponent;
  let fixture: ComponentFixture<DisenoCosinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisenoCosinasComponent]
    });
    fixture = TestBed.createComponent(DisenoCosinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
