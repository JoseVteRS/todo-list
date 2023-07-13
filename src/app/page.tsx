import { CreateTodoForm } from "@/components/create-todo";
import { TodoItem } from "@/components/todo-item";
import { Todo } from "@/services/todo/interfaces/todo.interface";

import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { [slug] } }): Promise<Metadata> {
  const todos = await fetch('http://localhost:3000/api/todos', {
    method: 'GET',
  }).then((res) => res.json())
  return { title: `TODOS | ${todos.length}` }
}


export default async function Home() {
  const todos = await fetch('http://localhost:3000/api/todos', {
    method: 'GET',
  }).then((res) => res.json())

  return (
    <main className="min-h-screen w-10/12 mx-auto py-8">

      {
        todos?.map((todo: Todo) => (
            <TodoItem key={todo.id} todo={todo} />
        ))
      }
      <CreateTodoForm />

    </main>
  )
}
