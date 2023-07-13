import { dateAgo } from '@/helper'
import { Todo } from '@/services/todo/interfaces/todo.interface'
import { InputDone } from './input-done'
import { RemoveButton } from './remove-button'

interface Props {
    todo: Todo
}


export const TodoItem = ({ todo }: Props) => {
    return (
        <div key={todo.id} className="flex gap-5 items-center justify-between my-5">
            <div className="flex gap-3 items-start">
                <InputDone id={todo.id} isDone={todo.done} />
                <div className={`${todo.done && 'line-through opacity-40'}`}>
                    <span className="text-sm text-pink-600">{todo.title}</span>
                    <p className="opacity-50 text-xs">{todo.description}</p>
                    <small className="text-gray-400">{dateAgo(todo.createdAt)}</small>
                </div>
            </div>

            <RemoveButton id={todo.id} />
        </div>
    )
}
