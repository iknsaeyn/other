import { Injectable } from '@angular/core'
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { TodoInterface, TodoUpdate } from './model/todo.model'

@State<TodoInterface>({
    name: 'TodoState',
    defaults: {
        text: ''
    }
})

@Injectable()
    export class TodoState {
        @Selector()
        static getTodo(state: TodoInterface) {
            return state
        }

        @Action(TodoUpdate)
        updateTodoModel(ctx: StateContext<TodoInterface>, action: TodoUpdate) {
            ctx.patchState({
                text: action.payload.text
            })
        }
    }