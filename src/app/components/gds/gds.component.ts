import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-gds',
  templateUrl: './gds.component.html',
  styleUrls: ['./gds.component.scss']
})
export class GdsComponent {
  constructor(public baseService: BaseService) { }
}


