import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySwitchboardComponent } from './my-switchboard.component';

describe('MySwitchboardComponent', () => {
  let component: MySwitchboardComponent;
  let fixture: ComponentFixture<MySwitchboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySwitchboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySwitchboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
