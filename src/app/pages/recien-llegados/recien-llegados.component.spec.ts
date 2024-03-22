import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecienLlegadosComponent } from './recien-llegados.component';

describe('RecienLlegadosComponent', () => {
  let component: RecienLlegadosComponent;
  let fixture: ComponentFixture<RecienLlegadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecienLlegadosComponent]
    });
    fixture = TestBed.createComponent(RecienLlegadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
