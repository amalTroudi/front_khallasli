import { TestBed } from '@angular/core/testing';

import { AlimentationCommerialWalletService } from './alimentation-commerial-wallet.service';

describe('AlimentationCommerialWalletService', () => {
  let service: AlimentationCommerialWalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlimentationCommerialWalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
