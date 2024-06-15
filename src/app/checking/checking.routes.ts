import {  Routes } from "@angular/router";
import { CheckinComponent } from "./checkin/checkin.component";
import { BookingInfoComponent } from "./booking-info/booking-info.component";
import { ProhibitedObjectComponent } from "./prohibited-object/prohibited-object.component";
import { BaggageChoosingComponent } from "./baggage-choosing/baggage-choosing.component";
import { SeatChoosingComponent } from "./seat-choosing/seat-choosing.component";

export const routes: Routes = [
    {
        path: 'check-in',
        component: CheckinComponent,
        children: [
            {
                path: 'booking-info',
                component: BookingInfoComponent,
            },
            {
                path: 'prohibited-object',
                component: ProhibitedObjectComponent,
            },
            {
                path: 'seat-choosing',
                component: SeatChoosingComponent,
            },
            {
                path: 'baggage-choosing',
                component: BaggageChoosingComponent,
            }
        ]
        // loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
];