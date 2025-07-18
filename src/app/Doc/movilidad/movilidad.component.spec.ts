import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovilidadComponent } from './movilidad.component';

describe('MovilidadComponent', () => {
  let component: MovilidadComponent;
  let fixture: ComponentFixture<MovilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovilidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
