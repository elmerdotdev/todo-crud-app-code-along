import { createTodo } from "@/app/actions/todos"
import SubmitBtn from "./SubmitBtn"

const AddTodo = () => {
  return (
    <form action={createTodo} className="flex">
      <input type="text" name="inputTodo" placeholder="Enter task details..." className="text-black flex-1 p-2" required />
      <SubmitBtn />
    </form>
  )
}

export default AddTodo