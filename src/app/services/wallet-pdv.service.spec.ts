import { TestBed } from '@angular/core/testing';

import { WalletPdvService } from './wallet-pdv.service';

describe('WalletPdvService', () => {
  let service: WalletPdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletPdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
