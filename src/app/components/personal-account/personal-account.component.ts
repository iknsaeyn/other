import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';
import { AuthorizationComponent } from '../authorization/authorization.component';

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.scss']
})
export class PersonalAccountComponent implements OnInit {

  usr!: any
  obj!: any

  constructor(public baseService: BaseService, private route: ActivatedRoute, private router: Router) { }
  token!: string

  ngOnInit(): void {
    this.token = this.route.snapshot.data['usr'].token
    // НЕ ОЧЕНЬ ПОНЯЛ КАК ЭТО СДЕЛАТЬ ЧЕРЕЗ ПОСТ, РЕАЛИЗОВАЛ ЧЕРЕЗ ГЕТ. (ПОЛУЧЕНИЕ ПОЛНОЙ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ)
    if (this.route.snapshot.data['usr'].token && this.baseService.role) {
      this.baseService.getOneUser(this.route.snapshot.data['usr'].id).subscribe(
        response => this.usr = response
      )
    } else {
      this.router.navigateByUrl('/auth')
    }

  }
}


