import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatChoosingComponent } from './seat-choosing.component';

describe('SeatChoosingComponent', () => {
  let component: SeatChoosingComponent;
  let fixture: ComponentFixture<SeatChoosingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatChoosingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatChoosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
