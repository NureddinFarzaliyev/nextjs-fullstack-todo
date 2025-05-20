import { TodoModel } from "@/app/(models)/todoModel"
import { Badge, Button, DataList, Dialog, Flex } from "@radix-ui/themes"
import TodoDeleteButton from "./TodoDeleteButton"

const TodoDetailsCard = ({
  todo
}: {
  todo: TodoModel
}) => {
  return (
    <>
      <Dialog.Title className="hidden">
        {todo.title}
      </Dialog.Title>
      <DataList.Root>
        <DataList.Item align="center">
          <DataList.Label minWidth="88px">Status</DataList.Label>
          <DataList.Value>
            <Badge color={todo.completed ? "jade" : "orange"} variant="soft" radius="full">
              {todo.completed ? "Completed" : "Pending"}
            </Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Title</DataList.Label>
          <DataList.Value className="font-bold">{todo.title}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Description</DataList.Label>
          <DataList.Value>{todo.description}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Due</DataList.Label>
          <DataList.Value>{todo.due}</DataList.Value>
        </DataList.Item>
      </DataList.Root>
      <Flex mt="5" justify="end" gap="2">
        <Dialog.Close>
          <TodoDeleteButton id={todo.id} />
        </Dialog.Close>
        <Dialog.Close>
          <Button
          >
            Close
          </Button>
        </Dialog.Close>
      </Flex>
    </>
  )
}

export default TodoDetailsCard
