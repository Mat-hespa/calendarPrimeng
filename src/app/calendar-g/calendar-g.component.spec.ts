import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarGComponent } from './calendar-g.component';

describe('CalendarGComponent', () => {
  let component: CalendarGComponent;
  let fixture: ComponentFixture<CalendarGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
