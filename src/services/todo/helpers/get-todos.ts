

export const getTodos = async () => {
    const response = await fetch('/api/todos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const todos = await response.json();
    return todos;
}