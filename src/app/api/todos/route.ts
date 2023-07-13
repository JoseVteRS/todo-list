import { TodoController } from "@/services/todo/todo.controller";
import { TodoRepository } from "@/services/todo/todo.repository";
import { NextRequest, NextResponse } from "next/server";


const todoRepository = new TodoRepository();
const todoController = new TodoController(todoRepository);


export async function GET() {
    const todos = await todoController.getTodos()
    return NextResponse.json(todos)
}

export async function POST(request: NextRequest) {
    const { title, description } = await request.json()
    const todo = await todoController.createTodo({ title, description })
    return NextResponse.json(todo)
}

