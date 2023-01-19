import { Component } from '@angular/core';
import { ResponseService } from './_services/response.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  constructor(
    public resServ: ResponseService
  ) { }
}
