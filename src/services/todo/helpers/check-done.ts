

export const checkDone = async ({ id, isDone }: { id: string, isDone: boolean }) => {

    try {
        const response = await fetch(`/api/todos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ done: isDone }),
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