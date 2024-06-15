import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CheckinService } from './services/checkin.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('.2s ease-out',
              style({ height: "100%", opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 300, opacity: 1 }),
            animate('1s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  availableEventListener: Subscription;
  stepState: number = 0;

  constructor(private router: Router, public checkinService: CheckinService) {
    // router.events.subscribe((val) => {
    //   // see also 
    //   console.log(val)
    // });
    this.availableEventListener = this.checkinService.stepsState.subscribe(availables => {
      this.stepState = availables;
    });

  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    if (!event?.currentTarget) return;
    this.updateStepState(event.currentTarget.location?.pathname);
    console.log('Back button pressed', event.currentTarget.location.pathname);
  }
  updateStepState(pathname: string): void {
    switch (pathname) {
      case '/':
        this.checkinService.stepsState.next(1);
        break;
      case '/check-in/booking-info':
        this.checkinService.stepsState.next(2);
        break;
      case '/check-in/prohibited-object':
        this.checkinService.stepsState.next(3);
        break;
      case '/check-in/seat-choosing':
        this.checkinService.stepsState.next(4);
        break;
      case '/check-in/baggage-choosing':
        this.checkinService.stepsState.next(5);
        break;
      default:
        break;

    }
  }
  ngOnDestroy(): void {
    this.availableEventListener.unsubscribe();
  }
  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      
      if (val instanceof NavigationStart)
        this.updateStepState(val.url);
    })
  }
  title = 'online-check-in';
  isOpened: boolean = false;

}
