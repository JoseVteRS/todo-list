'use client'

import { createTodo } from "@/services/todo/helpers/create-todo"
import { useRouter } from "next/navigation"
import { useState } from "react"


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

        await createTodo(todo)
        router.refresh();
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="text"
                id="text"
                className="w-full p-2 bg-gray-700 rounded my-1 text-white"
                placeholder="Titulo de la tarea"
            />
            <input
                onChange={(e) => setDescription(e.target.value)}
                type="text" name="description" id="description" className="w-full p-2 bg-gray-700 rounded my-1 text-white"
                placeholder="Descripcion de la tarea"
            />

            <button type="submit">Guardar</button>
        </form>
    )
}
