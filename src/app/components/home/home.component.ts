import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CountService} from '../../count.service';
import {
  from,
  map,
  zip,
  filter,
  interval,
  Observable,
  Subscription,
  take,
  takeWhile,
  fromEvent,
  audit,
  auditTime
} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {


  $myObv!: Observable<number>
  subscription: Subscription | undefined

  alive = true;

  @ViewChild('mydiv') mydiv!: ElementRef;

  data = ['Logan', 'Kiran', 'Zach', 'Dan', 'Emily']


  constructor(public cs: CountService) {
  }

  ngOnInit(): void {

      /*return*/


    this.$myObv = interval(200)
      .pipe(
        filter(v => v % 2 == 0),
        map(v => {

          console.log('Hello')
          return v * 10
        }),
        takeWhile(v => this.alive),
        take(5)
      )
  }
  ngAfterViewInit(): void {
    fromEvent<MouseEvent>(this.mydiv.nativeElement,"click")
      .pipe(
        map((e: MouseEvent) =>  ({x: e.clientX, y: e.clientY})),
        auditTime(1000))
      .subscribe(v => console.log(v))
  }


  startThatObs() {
    this.$myObv.subscribe({
      next: console.log,
      error:  e =>  console.error(e),
      complete: () => console.log("AM DONE")
    })}


  ngOnDestroy(): void {
    this.alive = false
  }

}
