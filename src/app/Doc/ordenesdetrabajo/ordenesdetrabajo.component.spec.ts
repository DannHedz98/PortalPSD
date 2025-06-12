import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesdetrabajoComponent } from './ordenesdetrabajo.component';

describe('OrdenesdetrabajoComponent', () => {
  let component: OrdenesdetrabajoComponent;
  let fixture: ComponentFixture<OrdenesdetrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenesdetrabajoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenesdetrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
