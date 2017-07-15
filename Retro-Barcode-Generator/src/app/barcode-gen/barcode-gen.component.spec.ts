import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeGenComponent } from './barcode-gen.component';

describe('BarcodeGenComponent', () => {
  let component: BarcodeGenComponent;
  let fixture: ComponentFixture<BarcodeGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodeGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
