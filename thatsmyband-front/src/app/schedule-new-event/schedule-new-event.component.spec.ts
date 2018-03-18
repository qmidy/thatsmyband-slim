import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleNewEventComponent } from './schedule-new-event.component';

describe('ScheduleNewEventComponent', () => {
  let component: ScheduleNewEventComponent;
  let fixture: ComponentFixture<ScheduleNewEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleNewEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleNewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
