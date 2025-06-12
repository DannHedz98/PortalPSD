import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFormatosComponent } from './menu-formatos.component';

describe('MenuFormatosComponent', () => {
  let component: MenuFormatosComponent;
  let fixture: ComponentFixture<MenuFormatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuFormatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuFormatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
