import { Component } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { IntervalService } from './_services/interval.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomNumbersSubscrip$!: Subscription
  numbersSubscrip$!: Subscription



  constructor(public intervalService: IntervalService) {
    this.randomNumbers()
    this.numbers()
  }

  numbers() {
    this.numbersSubscrip$ = this.intervalService.numbers()
      .subscribe((next) => this.intervalService.numbersArr.push(next))
  }

  randomNumbers() {
    this.randomNumbersSubscrip$ = this.intervalService.numbers().pipe(
      map(value => `Random Value: ${Math.round(Math.random() * (1000 - 1) + 1)}`)
    ).subscribe((next) => this.intervalService.randomNumbersArr.push(next))
  }

  unsubscribeNumbers() {
    this.numbersSubscrip$.unsubscribe()
  }

  unsubscribeRandomNumbers() {
    this.randomNumbersSubscrip$.unsubscribe()
  }


}
