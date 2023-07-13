import prisma from "@/lib/prisma";


interface CreateTodo {
    title: string;
    description: string;
    done?: boolean;
}



export async function createTodo({ title, description, done = false }: CreateTodo) {
    await prisma.todo.create({
        data: {
            title,
            description,
            done,
        }
    });
}