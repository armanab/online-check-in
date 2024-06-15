import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinService } from '../../services/checkin.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-prohibited-object',
  templateUrl: './prohibited-object.component.html',
  styleUrl: './prohibited-object.component.scss'
})
export class ProhibitedObjectComponent implements OnInit, AfterViewInit {
  @ViewChild('acceptRules') input: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('acceptRuleDescription') content: ElementRef<HTMLInputElement> | undefined;
  acceptRule = false;
  constructor(private router: Router, private service: CheckinService) {



  }

  ngAfterViewInit() {
    // ElementRef { nativeElement: <input> }
    console.log(this.input);

  }
  scrollToBottom = () => {
    try {
      if (this.content?.nativeElement) {
        // this.content.nativeElement.scrollTop = this.content?.nativeElement.scrollHeight;
        
        this.content.nativeElement.scrollTo( { top: this.content?.nativeElement.scrollHeight, behavior: 'smooth' } )
      }
    } catch (err) { }
  }
  NavigateToSeat(): void {
    this.router.navigateByUrl('check-in/seat-choosing');
  }

  goBack() {
    this.router.navigate(['check-in/booking-info']);  // define your component where you want to go
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  Continue(): void {
    if (this.acceptRule) {
      this.router.navigateByUrl('check-in/seat-choosing');
    }
    this.scrollToBottom()
    // this.input?.nativeElement.focus();
    this.input?.nativeElement.parentElement?.classList.add('wrong-entry');

    setTimeout(() => {
      if (this.input?.nativeElement.parentElement?.classList.contains('wrong-entry')) {
        this.input?.nativeElement.parentElement?.classList.remove('wrong-entry');
      }
    }, 1500);

  }

}
