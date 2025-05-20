"use server"

import { revalidateTag } from "next/cache"
import { CreateTodoModel } from "../(models)/createTodoModel"

export const fetchTodos = async () => {
  const res = await fetch('http://localhost:3000/api/', {
    next: {
      tags: ['todos'],
    }
  })
  const todos = await res.json()
  return todos
}

export const toggleComplete = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/${id}/complete`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  revalidateTag('todos')
  console.log(data)
}

export const createTodo = async (todo: CreateTodoModel) => {
  const res = await fetch('http://localhost:3000/api/', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  revalidateTag('todos')
  console.log(data)
}

export const deleteTodo = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/${id}`, {
    method: 'DELETE',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  revalidateTag('todos')
}
