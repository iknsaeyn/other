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
  account!: object


  toComeIn() {
    this.baseService.understandTheRole(this.login, this.password)
    this.baseService.getUsers().subscribe(
      {
        next: (response: any) => { this.account = response },
        error: () => console.log('Ошибка')
      }

    )
  }
}
