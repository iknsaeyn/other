import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store'
import { TodoUpdate } from '../TODO-STATE/model/todo.model';
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
  ) {}

  todoForm!: string
  

  addTodoItem() {
      this.todoState.id = this.todoState.id + 1
      this.store.dispatch(new TodoUpdate({
          text: this.todoForm,
          id: this.todoState.id
          }))
          this.todoForm = ''
          this.todoState.arr.push(this.store.selectSnapshot(TodoState.getTodo)) 
      }

    
  press(event: any, index: any){
    let completedTask = this.todoState.arr.splice(index, 1)[0];
    completedTask.completed = event.checked;
    if (!!completedTask.completed) {
      this.todoState.arr.push(completedTask);
    } else {
      this.todoState.arr.unshift(completedTask);
    }
  }

    delete(i: number) {
     this.todoState.arr.forEach((element: any, id:any) => {
      if(i == id) {
        this.todoState.arr.splice(i, 1)
      }
     })
    }
}
