import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat-choosing',
  templateUrl: './seat-choosing.component.html',
  styleUrl: './seat-choosing.component.scss'
})
export class SeatChoosingComponent {
  constructor(private router: Router) {

  }
  backToProhibited() {
    this.router.navigateByUrl('check-in/prohibited-object')
  }
  continue() { }

}
