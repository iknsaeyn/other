import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-product-editing',
  templateUrl: './product-editing.component.html',
  styleUrls: ['./product-editing.component.scss']
})
export class ProductEditingComponent implements OnInit {
  id: any = 0
  constructor(public baseService: BaseService, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activeRouter.snapshot.paramMap.get('id')
  }
}
