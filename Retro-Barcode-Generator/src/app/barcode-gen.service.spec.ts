import { TestBed, inject } from '@angular/core/testing';

import { BarcodeGenService } from './barcode-gen.service';

describe('BarcodeGenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarcodeGenService]
    });
  });

  it('should be created', inject([BarcodeGenService], (service: BarcodeGenService) => {
    expect(service).toBeTruthy();
  }));
});
