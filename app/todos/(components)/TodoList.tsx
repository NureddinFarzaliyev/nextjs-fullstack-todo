import { Grid } from "@radix-ui/themes"
import TodoCard from "./TodoCard"
import { TodoModel } from "@/app/(models)/todoModel"
import NewTodoButton from "./NewTodoButton"

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
          todos.map((todo, idx) => (
            <TodoCard todo={todo} key={idx} />
          ))
        }
        <NewTodoButton />
      </Grid >
    )
  }

export default TodoList
