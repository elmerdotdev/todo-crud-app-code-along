'use client'

import { deleteTodoById } from "@/app/actions/todos"

type Props = {
  todoId: number
}

const DeleteBtn = ({ todoId }: Props) => {
  return (
    <button onClick={() => deleteTodoById(todoId)} className="px-3 py-1 border border-black bg-red-500 text-white transition-colors">Delete</button>
  )
}

export default DeleteBtn