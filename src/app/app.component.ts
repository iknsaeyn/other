import { Component, OnInit } from '@angular/core';
import { GetService } from './_services/get.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private getService: GetService) { }

  todos: object[] = []

  ngOnInit() {
    this.getService.getTodos().subscribe({
      next: (todos: any) => {
        this.todos = todos
      },
      error: () => console.log('Ошибка')
    })
  }


}
