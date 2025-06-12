import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosFilialesComponent } from './servicios-filiales.component';

describe('ServiciosFilialesComponent', () => {
  let component: ServiciosFilialesComponent;
  let fixture: ComponentFixture<ServiciosFilialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosFilialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosFilialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
