import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesPendientesComponent } from './ordenes-pendientes.component';

describe('OrdenesPendientesComponent', () => {
  let component: OrdenesPendientesComponent;
  let fixture: ComponentFixture<OrdenesPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenesPendientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
