import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TzComponentComponent } from './tz-component.component';

describe('TzComponentComponent', () => {
  let component: TzComponentComponent;
  let fixture: ComponentFixture<TzComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TzComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TzComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
