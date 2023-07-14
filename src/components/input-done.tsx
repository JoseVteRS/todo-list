'use client'

import { checkDone } from "@/services/todo/helpers/check-done"
import { Todo } from "@/services/todo/interfaces/todo.interface"
import { useMutation, useQueryClient } from "@tanstack/react-query"

interface Props {
    id: string,
    isDone: boolean
}

export const InputDone = ({ id, isDone }: Props) => {
    const queryClient = useQueryClient()


    const mutation = useMutation({
        mutationFn: checkDone,
        // When mutate is called:
        onMutate: async (todo) => {
            const oldTodos = queryClient.getQueryData<Todo[]>(["todos"]);
            const oldTodo = queryClient.getQueryData<Todo>(["todos", todo.id]);
            queryClient.setQueryData(["todos", todo.id], todo);
            queryClient.setQueryData<Todo[]>(["todos"],
                () => {
                    return {
                        ...oldTodos,
                    }
                }
            );
            return {
                oldTodos,
                oldTodo,
            };
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["todos"]);
        },
        onError: (error, todo, ctx) => {
            if (!ctx) return;
            const { oldTodos, oldTodo } = ctx;
            queryClient.setQueryData(["todos", todo.id], oldTodo);
            queryClient.setQueryData<Todo[]>(["todos"], oldTodos);
        },
    })

    const toggleCheckboxChange = async () => {
        mutation.mutate({ id: id, isDone: !isDone })
    }

    // const  toggleCheckboxChange = async() => {
    //     await checkDone(id, !isChecked)
    //     setIsChecked(!isChecked);
    //     router.refresh();
    // };




    return (
        <>
            <label className="relative inline-flex items-center">
                <input
                    type="checkbox"
                    className="absolute opacity-0 w-0 h-0"
                    checked={isDone}
                    onChange={toggleCheckboxChange}
                />
                <div className={`w-8 h-8 ${isDone ? 'bg-green-500 border-green-800' : 'border-gray-400'} rounded-lg grid place-content-center border-2  flex-shrink-0 p-1 transition duration-200 ease-in-out mr-2`}>
                    {isDone && (
                        <svg className="w-4 h-4 text-gray-100 fill-current" viewBox="0 0 20 20">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                        </svg>
                    )}
                </div>
            </label>
            {/* <input type="checkbox" onChange={handleClick} checked={isDone} /> */}
        </>

    )
}
