import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDocComponent } from './nav-doc.component';

describe('NavDocComponent', () => {
  let component: NavDocComponent;
  let fixture: ComponentFixture<NavDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
