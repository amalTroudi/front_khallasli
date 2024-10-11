import { TestBed } from '@angular/core/testing';

import { HistoryWalletPdvService } from './history-wallet-pdv.service';

describe('HistoryWalletPdvService', () => {
  let service: HistoryWalletPdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryWalletPdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
