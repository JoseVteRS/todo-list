'use client'

import { createTodo } from "@/services/todo/helpers/create-todo";
import { CreateTodo, Todo } from "@/services/todo/interfaces/todo.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Toaster, toast } from 'sonner';



export const CreateTodoForm = () => {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: createTodo,
        onMutate: async (newTodo: CreateTodo) => {
            // Cancel any outgoing refetches, (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries({ queryKey: ['todos'] })

            // Snapshot the previous value
            const previousTodos = queryClient.getQueryData(['todos'])

            // Optimistically update to the new value
            queryClient.setQueryData(['todos'], (old: Todo[] | undefined) => {
                console.log({ old, newTodo })
                return [...old, {
                    id: 'provitional',
                    title: newTodo.title,
                    description: newTodo.description,
                    done: false,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                }]
            })

            // Return a context object with the snapshotted value
            return { previousTodos }
        },
        // If the mutation fails, use the context returned from onMutate to roll back
        onError: (err, newTodo, context: any) => {
            queryClient.setQueryData(['todos'], context.previousTodos)
            toast.error('Error al crear la tarea')
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
        onSuccess: () => {
            toast.success('Tarea creada')
        },
    })


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!title || !description) { toast.error('Todos los campos son requeridos') }
        else mutate({ title, description })
    }

    return (
        <>
            <hr className="opacity-20" />
            <form onSubmit={onSubmit}>
                <div className="flex gap-5 items-center justify-between my-5">
                    <div className="flex gap-5 items-center">
                        <div className="bg-gray-700 w-8 h-8 rounded-lg" ></div>
                        <div className="border rounded-xl border-gray-600 p-3">
                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Titulo de la tarea"
                                className="text-sm text-pink-600 bg-transparent focus:outline-none placeholder:text-pink-600 w-full" />

                            <input
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Descripcion de la tarea"
                                className="text-xs text-gray-400 bg-transparent focus:outline-none placeholder:text-gray-400 w-full" />

                        </div>
                    </div>
                </div>

                <button type="submit" className="bg-pink-800 text-white px-4 py-2 rounded-lg w-full">Guardar</button>
            </form>
            <Toaster richColors position="top-center" />
        </>

    )
}
