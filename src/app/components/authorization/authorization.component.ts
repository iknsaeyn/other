import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  constructor(
    public baseService: BaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  login: string = 'hbingley1'
  password: string = 'CQutx25i8r'



  async toComeIn() {
    this.baseService.understandTheRole(this.login, this.password)
  }

  // 'atuny0' '9uQFF1Lh'
  //'hbingley1' 'CQutx25i8r'
}
