import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloEstandarComponent } from './modelo-estandar.component';

describe('ModeloEstandarComponent', () => {
  let component: ModeloEstandarComponent;
  let fixture: ComponentFixture<ModeloEstandarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeloEstandarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloEstandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
