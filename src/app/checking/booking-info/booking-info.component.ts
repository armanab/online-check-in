import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinService } from '../../services/checkin.service';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrl: './booking-info.component.scss'
})
export class BookingInfoComponent implements OnInit {

  constructor(private _router: Router, private service: CheckinService) {


  }
  gotoHome(){
    this._router.navigate(['/']);  // define your component where you want to go
}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  Continue(): void {
    this._router.navigateByUrl('check-in/prohibited-object');
  }
}
