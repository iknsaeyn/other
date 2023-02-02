import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntervalService {

  randomNumbersArr: any = []
  numbersArr: any = []

  constructor() { }

  numbers() {
    const number$ = interval(2000)
    return number$
  }

}
