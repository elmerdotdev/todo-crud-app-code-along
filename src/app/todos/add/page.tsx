import AddTodo from "./AddTodo"

const page = () => {
  return (
    <div>
      <h1 className="mb-3 text-xl">Add a To Do Item</h1>
      <p className="mb-4">Easily add a new to do item.</p>
      <AddTodo />
    </div>
  )
}

export default page