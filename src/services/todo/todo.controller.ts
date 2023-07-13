import { Prisma } from "@prisma/client";
import { CreateTodo, TodoRepositoryInterface, UpdateTodo } from "./interfaces/todo.interface";
import { TodoRepository } from "./todo.repository";


export class TodoController implements TodoRepositoryInterface {
    constructor(
        private readonly todoRepository: TodoRepository
    ) { }

    async getTodos() {
        return this.todoRepository.getTodos()
    }

    async getTodoById(id: string) {
        return this.todoRepository.getTodoById(id)
    }

    async createTodo(todo: CreateTodo) {
        return this.todoRepository.createTodo(todo)
    }

    async updateTodoById(id: string, newDataTodo: UpdateTodo) {
        return this.todoRepository.updateTodoById(id, newDataTodo)
    }

    async deleteTodoById(id: string) {
        return this.todoRepository.deleteTodoById(id)
    }

    async getTodosByUserId(userId: string) {
        return this.todoRepository.getTodosByUserId(userId)
    }
}