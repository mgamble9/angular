import { TestBed, inject } from '@angular/core/testing';

import { MyRegistrationService } from './my-registration.service';

describe('MyRegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyRegistrationService]
    });
  });

  it('should be created', inject([MyRegistrationService], (service: MyRegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
