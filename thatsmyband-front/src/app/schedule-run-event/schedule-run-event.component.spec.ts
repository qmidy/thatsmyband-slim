import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleRunEventComponent } from './schedule-run-event.component';

describe('ScheduleRunEventComponent', () => {
  let component: ScheduleRunEventComponent;
  let fixture: ComponentFixture<ScheduleRunEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleRunEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleRunEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
