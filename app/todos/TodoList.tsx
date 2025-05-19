"use client"

import { AspectRatio, Grid, Heading, Text } from "@radix-ui/themes"
import { TodoModel } from "../(models)/todoModel"
import { ClockIcon } from "@radix-ui/react-icons"

// TODO: Delete, edit and complete buttons appear on hover
// TODO: Add new todo button 

const TodoList =
  ({
    todos
  }: {
    todos: [TodoModel]
  }) => {
    return (
      <Grid
        columns={{ initial: "2", xs: "3", md: "4", lg: "5" }}
        gap="4"
        className="w-full mt-5"
      >
        {
          todos.map((todo) => (
            <AspectRatio
              className={`flex gap-2 flex-col justify-end rounded-[var(--radius-1)] px-3 pt-2 pb-4 border border-white/20
                ${todo.completed ? "opacity-25" : "hover:bg-white/5 cursor-pointer transition-colors duration-200"}`}
              ratio={1}
              key={todo.id}
            >
              <Text
                size="1"
                className="flex gap-1 items-center opacity-75"
              >
                <ClockIcon /> {todo.due}
              </Text>
              <Heading size="3">
                {todo.title}
              </Heading>
            </AspectRatio>
          ))
        }
      </Grid >
    )
  }

export default TodoList
