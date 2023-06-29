import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoCrearComponent } from './empleado-crear.component';

describe('EmpleadoCrearComponent', () => {
  let component: EmpleadoCrearComponent;
  let fixture: ComponentFixture<EmpleadoCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoCrearComponent]
    });
    fixture = TestBed.createComponent(EmpleadoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
