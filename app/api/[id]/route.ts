import { todos } from "../db"

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {

  const id = parseInt(params.id)

  const index = todos.findIndex((todo) => todo.id === id)
  if (index !== -1) {
    todos.splice(index, 1)
  }
  if (index === -1) {
    return new Response("Todo not found", { status: 404 })
  }

  return new Response(null, { status: 204 })
}
