import { getTodoById, updateTodoById } from "@/app/actions/todos"

type Props = {
  params: {
    id: string
  }
}

const page = async ({ params }: Props) => {
  const { id } = params
  const todo = await getTodoById(Number(id))
  const updateTodoWithId = updateTodoById.bind(null, Number(id))

  return (
    <div>
      <h1 className="mb-3 text-xl">Edit To Do Item</h1>
      <p className="mb-4">Update the to do details.</p>

      <form action={updateTodoWithId} className="flex flex-col gap-1">
        <input type="text" name="inputTodo" defaultValue={todo?.task} className="text-black p-2" placeholder="Enter to do details..." required />
        <button type="submit" className="py-1 px-3 bg-black border">UPDATE</button>
      </form>
    </div>
  )
}

export default page