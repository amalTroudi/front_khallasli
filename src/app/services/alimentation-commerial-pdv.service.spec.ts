import { TestBed } from '@angular/core/testing';

import { AlimentationCommerialPdvService } from './alimentation-commerial-pdv.service';

describe('AlimentationCommerialPdvService', () => {
  let service: AlimentationCommerialPdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlimentationCommerialPdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
