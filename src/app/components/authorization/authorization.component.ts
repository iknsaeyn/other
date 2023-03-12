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
    private baseService: BaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  login: string = 'atuny0'
  password: string = '9uQFF1Lh'



  async toComeIn() {
    this.baseService.understandTheRole(this.login, this.password)
  }

  // 'atuny0' '9uQFF1Lh'
}
