import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasMantenimientoComponent } from './rutinas-mantenimiento.component';

describe('RutinasMantenimientoComponent', () => {
  let component: RutinasMantenimientoComponent;
  let fixture: ComponentFixture<RutinasMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutinasMantenimientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinasMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
