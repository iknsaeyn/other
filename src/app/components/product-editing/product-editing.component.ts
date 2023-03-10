import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-product-editing',
  templateUrl: './product-editing.component.html',
  styleUrls: ['./product-editing.component.scss']
})
export class ProductEditingComponent implements OnInit {
  @ViewChild('title') title!: ElementRef
  @ViewChild('description') description!: ElementRef
  @ViewChild('price') price!: ElementRef
  @ViewChild('brand') brand!: ElementRef
  @ViewChild('rating') rating!: ElementRef
  id: any = 0
  constructor(public baseService: BaseService, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activeRouter.snapshot.paramMap.get('id')
  }

  change() {
    this.baseService.arr[this.id - 1].title = this.title.nativeElement.value
    this.baseService.arr[this.id - 1].description = this.description.nativeElement.value
    this.baseService.arr[this.id - 1].price = this.price.nativeElement.value
    this.baseService.arr[this.id - 1].brand = this.brand.nativeElement.value
    this.baseService.arr[this.id - 1].rating = this.rating.nativeElement.value
  }
}
