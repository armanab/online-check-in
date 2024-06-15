import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckinComponent } from './checkin/checkin.component';
import { BaggageChoosingComponent } from './baggage-choosing/baggage-choosing.component';
import { SeatChoosingComponent } from './seat-choosing/seat-choosing.component';
import { ProhibitedObjectComponent } from './prohibited-object/prohibited-object.component';
import { BookingInfoComponent } from './booking-info/booking-info.component';
import { RouterModule } from '@angular/router';

import { routes } from './checking.routes';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SeatmapComponent } from './seatmap/seatmap.component';
import { FooterButtonsComponent } from './footer-buttons/footer-buttons.component';



@NgModule({
  declarations: [
    CheckinComponent,
    BaggageChoosingComponent,
    SeatChoosingComponent,
    ProhibitedObjectComponent,
    BookingInfoComponent,
    SeatmapComponent,
    FooterButtonsComponent
  ],
  providers:[],
  imports: [
    CommonModule,
    FormsModule,
    // BrowserModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class CheckingModule { }
