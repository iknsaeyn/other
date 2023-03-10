import { Component, OnInit } from '@angular/core';
import { BaseService } from './services/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private baseService: BaseService) { }
  ngOnInit(): void {
    this.baseService.getProducts()
      .subscribe(
        { next: (response: any) => { for (let a of response["products"]) { this.baseService.arr.push(a) } } }
      )
    console.log(this.baseService.arr)
  }
}
