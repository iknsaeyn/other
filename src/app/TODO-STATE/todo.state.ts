import { Injectable } from '@angular/core'
import { Action, Selector, State, StateContext, Store } from '@ngxs/store'
import { TodoInterface, TodoUpdate } from './model/todo.model'

@State<TodoInterface>({
  name: 'TodoState',
  defaults: {
    text: ''
  }
})

@Injectable()
export class TodoState {
  // id: number = -1
  arr: any = []

  constructor(
    private store: Store
  ) { }

  addTodoItem(todoItem: string) {
    // this.todoState.id = this.todoState.id + 1
    this.store.dispatch(new TodoUpdate({
      text: todoItem,
      // id: this.todoState.id
    }))
    todoItem = ''
    this.arr.unshift(this.store.selectSnapshot(TodoState.getTodo))
  }

  actualTasks(event: any, index: number) {
    let completedTask = this.arr.splice(index, 1)[0];
    completedTask.completed = event.target.checked;
    if (completedTask.completed) {
      this.arr.push(completedTask);
    } else {
      this.arr.unshift(completedTask);
    }
  }

  deleteTodoItem(idx: number) {
    this.arr.forEach((element: any, id: number) => {
      if (idx == id) {
        this.arr.splice(idx, 1)
      }
    })
  }

  @Selector()
  static getTodo(state: TodoInterface) {
    return state
  }

  @Action(TodoUpdate)
  updateTodoModel(ctx: StateContext<TodoInterface>, action: TodoUpdate) {
    ctx.patchState({
      text: action.payload.text,
      id: action.payload.id
    })
  }

}




