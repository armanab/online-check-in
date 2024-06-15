import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { RouterModule, provideRouter, withViewTransitions } from '@angular/router';
import { environment } from '../environments/environment';
import { MainMenuComponent } from './shared/main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CheckingModule } from './checking/checking.module';
import { FindBookingFormComponent } from './shared/find-booking-form/find-booking-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: environment.production }),
    CheckingModule,
    FormsModule
  ],

  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    FindBookingFormComponent,
    

  ],
  bootstrap: [
    AppComponent
  ],
  providers: [

    // ...SHARED_SERVICES,
    // { provide: API_BASE_URL, useValue: environment.apiBaseUrl },
    // { provide: WS_URL, useValue: environment.wsUrl }
  ],
  
  exports: [
    
  ],

})
export class AppModule { }
