import { Todo } from "@prisma/client";

export const filterDone = (todos: Todo[]) => todos.filter(todo => todo.done);