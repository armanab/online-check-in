import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer-buttons',
  templateUrl: './footer-buttons.component.html',
  styleUrl: './footer-buttons.component.scss'
})
export class FooterButtonsComponent {
  @Output() submited = new EventEmitter<string>();
  @Output() back = new EventEmitter<string>();
  constructor() { }
  countinue() {
    this.submited.emit('submited');
  }
  goBack() {
    this.back.emit('backed');

  }
}
