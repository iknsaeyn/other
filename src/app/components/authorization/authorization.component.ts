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
  ) {
  }

  login: string = 'atuny0'
  password: string = '9uQFF1Lh'
  account!: any
  id!: number
  usr!: any



  toComeIn() {
    this.baseService.understandTheRole(this.login, this.password)
    this.baseService.getUsers(this.login, this.password)
  }
}




// 'atuny0' '9uQFF1Lh'

