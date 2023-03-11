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


  ngOnInit(): void {
    this.baseService.getOneUser(this.route.snapshot.data['usr'].id).subscribe(
      response => this.usr = response
    )
  }
}


