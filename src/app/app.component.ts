import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store'
import { TodoUpdate } from './todo/model/todo.model';
import { TodoState } from './todo/todo.state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private store: Store
  ) {}

  todoItem!: object

  ngOnInit() {

    this.store.select(TodoState.getTodo).subscribe({
      next:(value) => {
        this.todoItem = value
      }
    })
  }
  
}
