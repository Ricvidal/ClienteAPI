import { TestBed } from '@angular/core/testing';

import { EssenciaService } from './essencia.service';

describe('EssenciaService', () => {
  let service: EssenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EssenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
