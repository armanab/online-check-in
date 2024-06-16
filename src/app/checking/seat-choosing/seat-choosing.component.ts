import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat-choosing',
  templateUrl: './seat-choosing.component.html',
  styleUrl: './seat-choosing.component.scss'
})
export class SeatChoosingComponent implements AfterViewInit,AfterViewChecked ,OnInit{
  @ViewChild('seatmapWrapperDesktop') content: ElementRef<HTMLInputElement> | undefined
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    
  }
  ngAfterViewChecked(): void {
    
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
    // this.scrollBottomToUp()
      
    }, 3000);
  }
  backToProhibited() {
    this.router.navigateByUrl('check-in/prohibited-object')
  }
  continue() { }

  scrollBottomToUp = () => {
    try {
      if (this.content?.nativeElement) {
        // this.content.nativeElement.scrollTop = this.content?.nativeElement.scrollHeight;
        debugger
        this.content.nativeElement.scrollTo({ left: this.content?.nativeElement.scrollWidth, behavior: 'smooth' })
      }
    } catch (err) { }
  }

}
