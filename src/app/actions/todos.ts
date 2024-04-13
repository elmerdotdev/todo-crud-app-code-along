'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

type Todo = {
  id: number
  task: string
  completed: boolean
}

// In-memory database
const todos = [
  {
    id: 1,
    task: 'Buy milk',
    completed: false
  }
]

// Get all todos
export const getTodos = async (): Promise<Todo[]> => {
  return new Promise((resolve) => {
    resolve(todos)
  })
}

// Get todo by id
export const getTodoById = async (id: number): Promise<Todo | undefined> => {
  return new Promise((resolve) => {
    const todo = todos.find(todo => todo.id === id)
    resolve(todo)
  })
}

// Add a todo
export const createTodo = async (formData: FormData) => {
  const newTodo = {
    id: Math.floor(Math.random() * 10000),
    task: formData.get('inputTodo')?.toString() || '',
    completed: false
  }

  todos.push(newTodo)

  revalidatePath('/todos')
  redirect('/todos')
}

// Update a todo by id
export const updateTodoById = async (id: number, formData: FormData) => {
  const task = formData.get('inputTodo')?.toString() || ''

  const todo = todos.find(todo => todo.id === id)
  if (todo) {
    todo.task = task
  }

  revalidatePath('/todos')
  redirect('/todos')
}

// Delete a todo by id
export const deleteTodoById = async (id: number) => {
  const todoIndex = todos.findIndex(todo => todo.id === id)
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1)
  }

  revalidatePath('/todos')
  redirect('/todos')
}