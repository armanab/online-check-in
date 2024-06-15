import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { checkinModel } from '../models/checkin';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  // selectedState = new Subject();
  //   selectedTicket = new BehaviorSubject<any>(null);
  stepsState = new BehaviorSubject(1);

  passengerForms = new Array<checkinModel>();
  constructor() { }
}
