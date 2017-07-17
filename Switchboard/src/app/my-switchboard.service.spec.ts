import { TestBed, inject } from '@angular/core/testing';

import { MySwitchboardService } from './my-switchboard.service';

describe('MySwitchboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySwitchboardService]
    });
  });

  it('should be created', inject([MySwitchboardService], (service: MySwitchboardService) => {
    expect(service).toBeTruthy();
  }));
});
