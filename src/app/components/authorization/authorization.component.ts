import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  constructor(
    private baseService: BaseService
  ) { }

  login: string = ''
  password: string = ''
  account!: any
  id!: number


  toComeIn() {
    this.baseService.understandTheRole(this.login, this.password)

    this.baseService.getUsers(this.login, this.password).then(
      res => this.account = res
    )
    console.log(this.account)
  }
}

// 'atuny0' '9uQFF1Lh'
