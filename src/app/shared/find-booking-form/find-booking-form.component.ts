import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CheckinService } from '../../services/checkin.service';
import { checkinModel } from '../../models/checkin';
// import { checkinModel } from '../../models/checkin.toRefs';


@Component({
  selector: 'app-find-booking-form',
  templateUrl: './find-booking-form.component.html',
  styleUrl: './find-booking-form.component.scss'
})

export class FindBookingFormComponent implements OnInit {
  @Output() submited = new EventEmitter<checkinModel>();
  model: checkinModel={ pnr: '', lastName: '' };
  testEnv: boolean = false;
  pnr: string = '';
  pnrTest = 'TEST PNR'
  lastName: string = '';
  constructor(public checkinService: CheckinService) {
    // this.model = { pnr: '', lastName: '' }
  }
  ngOnInit(): void {

  }
  onTestEnvironment(): void {


    this.model.pnr = this.pnrTest

    this.testEnv = !this.testEnv;

  }
  onCheckIn(): void {
    this.submited.emit(this.model);
    // this.checkinService.stepsState.next(2);
    // this._router.navigateByUrl('check-in/booking-info')
  }
}
