import { TestBed, inject } from '@angular/core/testing';

import { MyLayoutService } from './my-layout.service';

describe('MyLayoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyLayoutService]
    });
  });

  it('should be created', inject([MyLayoutService], (service: MyLayoutService) => {
    expect(service).toBeTruthy();
  }));
});
