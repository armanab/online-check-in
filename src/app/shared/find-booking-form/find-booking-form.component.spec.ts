import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBookingFormComponent } from './find-booking-form.component';

describe('FindBookingFormComponent', () => {
  let component: FindBookingFormComponent;
  let fixture: ComponentFixture<FindBookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindBookingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
