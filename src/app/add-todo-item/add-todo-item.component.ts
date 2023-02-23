import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store'
import { TodoUpdate } from '../todo/model/todo.model';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss']
})
export class AddTodoItemComponent {
  constructor(
    private store: Store
  ) {}

  todoForm!: FormGroup

  addTodoItem(){
    this.store.dispatch(
      new TodoUpdate({
        text: this.todoForm.controls['todo'].value
        
      })
    )
  }

}
