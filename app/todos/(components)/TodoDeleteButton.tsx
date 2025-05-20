import { AlertDialog, Button, Flex } from "@radix-ui/themes"
import { deleteTodo } from "../actions"

const TodoDeleteButton = ({ id }: { id: number }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button
          variant="soft"
          color="gray"
        >
          Delete
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Delete Todo</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure that you want to delete this todo item? This operation cannot be taken back.
        </AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button onClick={() => deleteTodo(id)} variant="solid" color="red">
              Delete Todo
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>

  )
}

export default TodoDeleteButton
