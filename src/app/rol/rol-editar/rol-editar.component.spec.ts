import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolEditarComponent } from './rol-editar.component';

describe('RolEditarComponent', () => {
  let component: RolEditarComponent;
  let fixture: ComponentFixture<RolEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolEditarComponent]
    });
    fixture = TestBed.createComponent(RolEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
