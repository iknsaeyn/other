import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store'
import { TodoUpdate } from 'src/todo/model/todo.model';
import { TodoState } from 'src/todo/todo.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store
  ) {}

  currentTodo = this.store.selectSnapshot(TodoState.getTodo)

  ngOnInit(){
    
    this.store.select(TodoState.getTodo).subscribe({
      next: (value) => {
        this.currentTodo = value
      }
    })
   
  }

  updateTodoState() {
    this.store.dispatch(
      new TodoUpdate({
        text: 'Hello, world!'
      })
    )
  }

  resetTodoState() {
    this.store.dispatch(
      new TodoUpdate({
        text: ''
      })
    )
  }
}
