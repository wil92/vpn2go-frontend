import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VpnService } from './vpn.service';

describe('VpnService', () => {
  let service: VpnService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VpnService]
    });
    service = TestBed.inject(VpnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
