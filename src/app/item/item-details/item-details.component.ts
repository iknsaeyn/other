import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  constructor(
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.activeRouter.snapshot.params);
  }
}
