import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRegistrationComponent } from './my-registration.component';

describe('MyRegistrationComponent', () => {
  let component: MyRegistrationComponent;
  let fixture: ComponentFixture<MyRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
