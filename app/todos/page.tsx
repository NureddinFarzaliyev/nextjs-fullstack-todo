import { Container, Heading } from '@radix-ui/themes'
import React from 'react'
import TodoList from './TodoList'

const Page = async () => {
  const res = await fetch('http://localhost:3000/api/')
  const todos = await res.json()

  return (
    <Container>
      <Heading size="4">
        Your Todos
      </Heading>
      <TodoList todos={todos} />
    </Container>
  )
}

export default Page
