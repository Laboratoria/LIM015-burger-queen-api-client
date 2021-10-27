import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesListasComponent } from './ordenes-listas.component';

describe('OrdenesListasComponent', () => {
  let component: OrdenesListasComponent;
  let fixture: ComponentFixture<OrdenesListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenesListasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
