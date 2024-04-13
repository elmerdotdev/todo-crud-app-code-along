'use client'

import Link from "next/link"
import { deleteTodoById } from "../actions/todos"

type Props = {
  todo: {
    id: number
    task: string
    completed: boolean
  }
}

const TodoListItem = ({ todo }: Props) => {
  return (
    <li key={todo.id} className="my-1 flex justify-between items-center bg-white text-black p-3">
      <span>{todo.task}</span>
      <div className="flex gap-2">
        <Link href={`/todos/${todo.id}`} className="px-3 py-1 border border-black hover:bg-green-500 hover:text-white transition-colors">View</Link>
        <button onClick={() => deleteTodoById(todo.id)} className="px-3 py-1 border border-black hover:bg-red-500 hover:text-white transition-colors">Delete</button>
      </div>
    </li>
  )
}

export default TodoListItem