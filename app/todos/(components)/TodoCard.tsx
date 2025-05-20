"use client"

import { AspectRatio, Dialog, Heading, Text } from "@radix-ui/themes"
import { ClockIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import ToggleCompleteButton from "./ToggleCompleteButton"
import { TodoModel } from "@/app/(models)/todoModel"
import TodoDetailsCard from "./TodoDetailsCard"

const TodoCard = ({
  todo
}: {
  todo: TodoModel
}) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false)

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <AspectRatio
          className={`flex gap-2 flex-col justify-end rounded-[var(--radius-1)] px-3 pt-2 pb-4 border border-white/20 cursor-pointer transition-all duration-200 hover:bg-white/5
                ${todo.completed && "opacity-25"}`}
          ratio={1}
          key={todo.id}
          onMouseEnter={() => setIsButtonVisible(true)}
          onMouseLeave={() => setIsButtonVisible(false)}
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
          <ToggleCompleteButton
            showButton={isButtonVisible}
            isCompleted={todo.completed}
            id={todo.id}
          />
        </AspectRatio>
      </Dialog.Trigger>
      <Dialog.Content>
        <TodoDetailsCard todo={todo} />
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default TodoCard
