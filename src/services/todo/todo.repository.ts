import prisma from "@/lib/prisma";
import { CreateTodo, Todo, TodoRepositoryInterface, UpdateTodo } from "./interfaces/todo.interface";


export class TodoRepository implements TodoRepositoryInterface {
    async getTodos(): Promise<Todo[]> {
        const todos = await prisma.todo.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        })
        return todos
    }
    async getTodoById(id: string): Promise<Todo> {
        throw new Error("Method not implemented.");
    }
    async createTodo(todo: CreateTodo): Promise<Todo> {
        return await prisma.todo.create({
            data: {
                title: todo.title,
                description: todo.description,
            },
        })
    }
    async updateTodoById(id: string, newTodoData: UpdateTodo): Promise<Todo> {
        return await prisma.todo.update({
            where: { id },
            data: {
                ...newTodoData
            }
        })
    }
    async deleteTodoById(id: string): Promise<void> {
        await prisma.todo.delete({
            where: { id }
        })
    }

    async getTodosByUserId(userId: string): Promise<Todo[]> {
        throw new Error("Method not implemented.");
    }
}