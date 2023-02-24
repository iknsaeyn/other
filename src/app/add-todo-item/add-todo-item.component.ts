import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store'
import { TodoUpdate } from '../todo/model/todo.model';
import { TodoState } from '../todo/todo.state';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss']
})
export class AddTodoItemComponent {
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
          console.log(this.todoState.arr)
      }

    
  press(event: any, index: any){
      console.log(event.checked);
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
