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
  products: any[] = []

  ngOnInit(): void {
    this.href = this.router.url;
    this.baseService.href = this.href
    this.baseService.getProducts()
      .subscribe(
        { next: (response: any) => { for (let a of response["products"]) { this.products.push(a) } } }
      )
  }

}
