import { TestBed, inject } from '@angular/core/testing';

import { TzServiceService } from './tz-service.service';

describe('TzServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TzServiceService]
    });
  });

  it('should be created', inject([TzServiceService], (service: TzServiceService) => {
    expect(service).toBeTruthy();
  }));
});
