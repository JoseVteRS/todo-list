'use client'


import { getTodos } from "@/services/todo/helpers/get-todos"
import { Todo } from "@/services/todo/interfaces/todo.interface"
import { useQuery } from "@tanstack/react-query"
import { TodoItem } from "./todo-item"



export const ListTodo = () => {

    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ['todos'],
        queryFn: () => getTodos(),
    })

    if (isLoading) return <p>Loading...</p>

    return (
        <div className="list-todos overflow-y-scroll max-h-[calc(100vh-300px)] px-5">
            {
                data?.map((todo: Todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
        </div>
    )
}
