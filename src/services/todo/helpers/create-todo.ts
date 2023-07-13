import { CreateTodo } from "../interfaces/todo.interface"


export const createTodo = async (todo: CreateTodo) => {

    try {
        const response = await fetch('/api/todos', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        if (!response.ok) {
            return { message: response.statusText }
        }
        const data = await response.json()
        return data
    } catch (error) {
        return { message: error.message }
    }

}