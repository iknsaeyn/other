import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store'
import { TodoState } from '../TODO-STATE/todo.state';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  constructor(
    private store: Store,
    public todoState: TodoState
  ) { }

  todoItem!: string

  addTodoItem(todoItem: string) {
    this.todoState.addTodoItem(todoItem)
    this.todoItem = ''
  }

  actualTasks(event: any, index: number) {
    this.todoState.actualTasks(event, index)
  }

  deleteTodoItem(idx: number) {
    this.todoState.deleteTodoItem(idx)
  }
}
