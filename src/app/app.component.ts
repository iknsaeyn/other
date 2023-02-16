import { Component } from '@angular/core';
import { DataService } from './_servisecs/data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dataService: DataService) { }

}
