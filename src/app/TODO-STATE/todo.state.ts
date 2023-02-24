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
        id: number = -1
        arr:any = []


        constructor(
            private store: Store
        ) {

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

    

    
    