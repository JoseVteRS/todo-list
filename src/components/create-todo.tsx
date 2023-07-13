'use client'

import { createTodo } from "@/services/todo/helpers/create-todo";
import { useRouter } from "next/navigation";
import { useState } from "react";




export const CreateTodoForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const router = useRouter()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const todo = {
            title,
            description,
        }

        if(!title || !description) return
        await createTodo(todo)
        router.refresh();
       
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="flex gap-5 items-center justify-between my-5">
                    <div className="flex gap-3 items-start">
                        <div className="bg-gray-700 w-8 h-8 rounded-lg" ></div>
                        <div>
                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Titulo de la tarea"
                                className="text-sm text-pink-600 bg-transparent focus:outline-none placeholder:text-pink-600 placeholder:opacity-50 w-full" />

                            <input
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Descripcion de la tarea"
                                className="text-xs text-gray-400 bg-transparent focus:outline-none placeholder:text-gray-400 placeholder:opacity-50 w-full" />

                        </div>
                    </div>
                </div>

                <button type="submit" className="bg-pink-800 text-white px-4 py-2 rounded-lg w-full">Guardar</button>
            </form>
        </>

    )
}
