import { TestBed } from '@angular/core/testing';

import { GrupoSService } from './grupo-s.service';

describe('GrupoSService', () => {
  let service: GrupoSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
