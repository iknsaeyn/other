import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs';
import { filter, of } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(public baseService: BaseService) { }

}
