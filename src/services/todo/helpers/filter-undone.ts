import { Todo } from "../interfaces/todo.interface";

export const filterUndone = (todos: Todo[]) => todos.filter(todo => !todo.done);