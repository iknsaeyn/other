import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  constructor(public baseService: BaseService, private router: Router) { }


  public href: string = ""

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.router.url);
    this.baseService.href = this.href
  }

}
