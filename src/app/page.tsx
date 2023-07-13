import { CreateTodoForm } from "@/components/create-todo";
import { MarkAsDoneButton } from "@/components/mark-as-done";
import { MarkAsUndoneButton } from "@/components/mark-as-undone";
import { Todo } from "@/services/todo/interfaces/todo.interface";


export default async function Home() {
  const todos = await fetch('http://localhost:3000/api/todos', {
    method: 'GET',
  }).then((res) => res.json())

  const dateAgo = (date: Date) => {
    const dateNow = new Date().getTime()
    const dateTodo = new Date(date).getTime()
    const diff = dateNow - dateTodo
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor(diff / (1000 * 60))
    const seconds = Math.floor(diff / (1000))

    if (days > 0) return `${days} days ago`
    if (hours > 0) return `${hours} hours ago`
    if (minutes > 0) return `${minutes} minutes ago`
    if (seconds > 0) return `${seconds} seconds ago`
  }


  if (!todos) return;

  return (
    <main className="min-h-screen w-10/12 mx-auto py-8">

      <CreateTodoForm />

      {
        todos?.map((todo: Todo) => (
          <div key={todo.id} className="flex gap-5 items-center justify-between my-5">

            <div className={`${todo.done && 'line-through opacity-40'}`}>
              <span className="text-sm text-pink-600">{todo.title}</span>
              <p className="opacity-50 text-xs">{todo.description}</p>
              <small className="text-gray-400">{dateAgo(todo.createdAt)}</small>
            </div>

            <div className="flex gap-5 justify-end">
              {
                todo.done ? (<MarkAsUndoneButton id={todo.id} />) : (<MarkAsDoneButton id={todo.id} />)
              }
            </div>
          </div>
        ))
      }


    </main>
  )
}
