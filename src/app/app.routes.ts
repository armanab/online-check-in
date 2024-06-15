import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
        // loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'checkin',
        loadChildren: () => import('./checking/checking.module').then(mod => mod.CheckingModule)
    }
    // {
    //     path: 'booking-info',
    //     component: CheckinComponent,
    //     children: [
    //         // { path: '', redirectTo: '', pathMatch: 'full' },
    //         { path: '', component: BookingInfoComponent },
    //         // { path: 'seat-choosing', component: SeatChoosingComponent }
    //     ]

    // },
    // {
    //     path: 'seat-choosing',
    //     component: CheckinComponent,
    //     children: [
    //         { path: '', component: SeatChoosingComponent },
    //     ]
    // }
    // {
    //     path: 'products/:productId',
    //     loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
    // }
];

