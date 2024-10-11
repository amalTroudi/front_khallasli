import { TestBed } from '@angular/core/testing';

import { DemandeAlientationPdvService } from './demande-alientation-pdv.service';

describe('DemandeAlientationPdvService', () => {
  let service: DemandeAlientationPdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeAlientationPdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
