import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEnlacesComponent } from './menu-enlaces.component';

describe('MenuEnlacesComponent', () => {
  let component: MenuEnlacesComponent;
  let fixture: ComponentFixture<MenuEnlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuEnlacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEnlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
