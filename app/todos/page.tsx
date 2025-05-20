import { Container, Heading } from '@radix-ui/themes'
import React from 'react'
import TodoList from './(components)/TodoList'
import { fetchTodos } from './actions'

const Page = async () => {
  const todos = await fetchTodos()

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
