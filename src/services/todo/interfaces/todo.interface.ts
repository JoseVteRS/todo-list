

export interface Todo {
    id: string
    title: string
    description: string
    done: boolean
    createdAt: Date
    updatedAt: Date
}

export interface CreateTodo {
    title: string
    description: string
    done?: boolean
}


export interface UpdateTodo extends Partial<CreateTodo> { }



export interface TodoRepositoryInterface {
    getTodos(): Promise<Todo[]>
    getTodoById(id: string): Promise<Todo>
    createTodo(todo: Todo): Promise<Todo>
    updateTodoById(id: string, todo: UpdateTodo): Promise<Todo>
    deleteTodoById(id: string): Promise<void>
    getTodosByUserId(userId: string): Promise<Todo[]>
}