import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibitedObjectComponent } from './prohibited-object.component';

describe('ProhibitedObjectComponent', () => {
  let component: ProhibitedObjectComponent;
  let fixture: ComponentFixture<ProhibitedObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProhibitedObjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProhibitedObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
