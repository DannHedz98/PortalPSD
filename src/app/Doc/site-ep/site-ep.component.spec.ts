import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEPComponent } from './site-ep.component';

describe('SiteEPComponent', () => {
  let component: SiteEPComponent;
  let fixture: ComponentFixture<SiteEPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteEPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
