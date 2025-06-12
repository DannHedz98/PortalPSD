import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDocumentacionComponent } from './menu-documentacion.component';

describe('MenuDocumentacionComponent', () => {
  let component: MenuDocumentacionComponent;
  let fixture: ComponentFixture<MenuDocumentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDocumentacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDocumentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
