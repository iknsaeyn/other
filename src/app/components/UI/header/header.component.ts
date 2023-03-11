import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { AuthorizationComponent } from '../../authorization/authorization.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    public baseService: BaseService,
  ) { }

  goOut() {
    this.baseService.role = ''
  }




}
