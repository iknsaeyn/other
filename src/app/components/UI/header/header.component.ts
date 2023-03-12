import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';
import { AuthorizationComponent } from '../../authorization/authorization.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public baseService: BaseService, public route: ActivatedRoute, private router: Router) { }

  goOut() {
    this.baseService.role = ''
  }
  ngOnInit(): void {
  }

}
