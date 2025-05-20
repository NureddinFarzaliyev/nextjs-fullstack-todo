"use server"

import { revalidateTag } from "next/cache"

export const toggleComplete = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/${id}/complete`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  revalidateTag('todos')
  console.log(data)
}
