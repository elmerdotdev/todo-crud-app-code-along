import { getTodoById } from "@/app/actions/todos"
import Link from "next/link"
import DeleteBtn from "../DeleteBtn"

type Props = {
  params: {
    id: string
  }
}

const page = async ({ params }: Props) => {
  const { id } = params
  const todo = await getTodoById(Number(id))

  return (
    <div>
      <h1 className="mb-3 text-xl">To Do Details</h1>
      <h2>ID: {todo?.id}</h2>
      <h2>Task: {todo?.task}</h2>
      <h2>Status: {todo?.completed ? 'Completed' : 'Not completed'}</h2>

      <div className="flex gap-2 mt-3">
        <Link href="/todos" className="px-3 py-1 border border-black bg-white text-black">Back</Link>
        <Link href={`/todos/edit/${todo?.id}`} className="px-3 py-1 border border-black bg-green-500">Edit</Link>
        <DeleteBtn todoId={todo!.id} />
      </div>
    </div>
  )
}

export default page