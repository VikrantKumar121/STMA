import { TestBed } from '@angular/core/testing';

import { FteAuthServicesService } from './fte-auth-services.service';

describe('FteAuthServicesService', () => {
  let service: FteAuthServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FteAuthServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
