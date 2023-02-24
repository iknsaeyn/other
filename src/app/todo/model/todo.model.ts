export interface TodoInterface {
    text?: string,
    id?: number
}

export class TodoUpdate {
    static readonly type = '[Todo]: Todo Update'
    constructor(public payload: TodoInterface) {}
}