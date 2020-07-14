import { TestBed } from '@angular/core/testing';

import { VpnService } from './vpn.service';

describe('VpnService', () => {
  let service: VpnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VpnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
