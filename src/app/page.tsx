import { CreateTodoForm } from "@/components/create-todo";
import { ReactQueryHydrate } from "@/components/hydrate-client";
import { ListTodo } from "@/components/list-todos";
import getQueryClient from "@/lib/get-query-client";
import { getTodos } from "@/services/todo/get-todo";
import { dehydrate } from "@tanstack/react-query";



export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['todos'], () => getTodos())
  const dehydratedState = dehydrate(queryClient)

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <main className="min-h-screen w-10/12 mx-auto py-8">
        <ListTodo />
        <CreateTodoForm />
      </main>
    </ReactQueryHydrate>
  )
}
