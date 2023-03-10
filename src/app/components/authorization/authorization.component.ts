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

  toComeIn() {
    console.log(this.login, this.password)
    this.baseService.understandTheRole(this.login, this.password)
    console.log(this.baseService.role)

  }
}
