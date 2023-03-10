import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { AuthorizationComponent } from '../authorization/authorization.component';

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.scss']
})
export class PersonalAccountComponent implements OnInit {
  a!: any
  usr!: any

  constructor(public baseService: BaseService) { }
  ngOnInit(): void {
    this.a = this.baseService.account
    this.baseService.getOneUser(this.a.id).subscribe(
      (response) => this.usr = response
    )
  }

}


// 'atuny0' '9uQFF1Lh'