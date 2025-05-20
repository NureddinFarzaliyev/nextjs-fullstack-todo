"use client"

import { AspectRatio, Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import { createTodo } from '../actions'

const NewTodoButton = () => {

  const [todoData, setTodoData] = useState({
    title: '',
    description: '',
    due: ''
  })

  const [isCreateTodoLoading, setIsCreateTodoLoading] = useState(false)

  const handleSubmit = async () => {
    setIsCreateTodoLoading(true)
    await createTodo(todoData)
    setIsCreateTodoLoading(false)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <AspectRatio
          className={`flex gap-2 flex-col text-3xl justify-center items-center rounded-[var(--radius-1)] px-3 pt-2 pb-4 border border-white/20 hover:bg-white/5 cursor-pointer transition-colors duration-200`}
          ratio={1}
        >
          <span className='opacity-50'>
            +
          </span>
        </AspectRatio>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title mb="5" mt="2">Create Todo</Dialog.Title>
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1">
              Title
            </Text>
            <TextField.Root
              onChange={(e) => setTodoData({ ...todoData, title: e.target.value })}
              placeholder="Enter todo title"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1">
              Description
            </Text>
            <TextField.Root
              onChange={(e) => setTodoData({ ...todoData, description: e.target.value })}
              placeholder="Enter todo description"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1">
              Due Date
            </Text>
            <TextField.Root
              type="date"
              onChange={(e) => setTodoData({ ...todoData, due: e.target.value.toString() })}
              placeholder="Enter todo due date"
            />
          </label>
        </Flex>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray" disabled={isCreateTodoLoading}>
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleSubmit} disabled={isCreateTodoLoading} loading={isCreateTodoLoading}>
              Save
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default NewTodoButton
