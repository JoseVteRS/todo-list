import { TodoController } from "@/services/todo/todo.controller";
import { TodoRepository } from "@/services/todo/todo.repository";
import { NextResponse } from "next/server";

interface Segments {
    params: {
        id: string;
    }
}


const todoRepository = new TodoRepository();
const todoController = new TodoController(todoRepository);


export async function PATCH(request: Request, { params }: Segments) {
    const { id } = params
    const { done } = await request.json()

    const todo = await todoController.updateTodoById(id, { done })

    return NextResponse.json(todo)
}


export async function DELETE(request: Request, { params }: Segments) {
    const { id } = params

    await todoController.deleteTodoById(id)

    return NextResponse.json({ message: 'Todo deleted' })
}


