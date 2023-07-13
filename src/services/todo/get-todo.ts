import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";

export async function getTodos(): Promise<Todo[]> {
    const todos = await prisma.todo.findMany({
        skip: 0,
        take: 10,
    })

    return todos
}
