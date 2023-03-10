import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(
    private activeRouter: ActivatedRoute,
    private baseService: BaseService
  ) {

  }

  num: any = 0
  obj: any = {}
  href: string = ''

  ngOnInit(): void {
    this.href = this.baseService.href
    this.num = this.activeRouter.snapshot.params
    this.baseService.getProduct(this.num).subscribe(
      { next: (response) => this.obj = response }
    )
  }

}
