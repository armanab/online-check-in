import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinService } from '../services/checkin.service';
import { FindBookingFormComponent } from '../shared/find-booking-form/find-booking-form.component';
import { checkinModel } from '../models/checkin';

@Component({
  selector: 'app-home',
  // standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router, public checkinService: CheckinService) {


  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  CheckIn(value: checkinModel): void {
    this.checkinService.passengerForms.push(value)
    this.checkinService.stepsState.next(2);
    this._router.navigateByUrl('check-in/booking-info')
  }
}
