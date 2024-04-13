import { getTodos } from "@/app/actions/todos"
import Link from "next/link"
import type { Metadata } from "next"
import TodoListItem from "./TodoListItem"
import AddTodo from "./add/AddTodo"

export const metadata: Metadata = {
  title: 'To Dos',
  description: 'This is the todos page'
}

const page = async () => {
  const todos = await getTodos()

  return (
    <div>
      <h1 className="mb-3 text-xl">To Dos</h1>
      <p className="mb-4">These are your tasks for today. Have fun!</p>
      <ul className="mb-3">
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <AddTodo />
    </div>
  )
}

export default page