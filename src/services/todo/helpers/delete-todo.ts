

export const deleteTodo = (id: string) => {
    return fetch(`/api/todos/${id}`, {
        method: 'DELETE'
    })
}