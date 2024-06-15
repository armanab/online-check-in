import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggageChoosingComponent } from './baggage-choosing.component';

describe('BaggageChoosingComponent', () => {
  let component: BaggageChoosingComponent;
  let fixture: ComponentFixture<BaggageChoosingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaggageChoosingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaggageChoosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
