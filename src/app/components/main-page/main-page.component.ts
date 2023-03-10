import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { retry } from 'rxjs';
import { filter, of } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  constructor(public baseService: BaseService, private route: ActivatedRoute, private router: Router) { }

  href: string = ""

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
    this.baseService.href = this.href
  }
}
