import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioEmpComponent } from './portafolio-emp.component';

describe('PortafolioEmpComponent', () => {
  let component: PortafolioEmpComponent;
  let fixture: ComponentFixture<PortafolioEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortafolioEmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
