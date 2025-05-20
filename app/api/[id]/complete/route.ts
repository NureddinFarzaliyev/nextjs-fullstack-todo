
import { todos } from "../../db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const todo = todos.find((todo) => todo.id === parseInt(params.id));

  if (!todo) {
    return new Response("Todo not found", { status: 404 });
  }

  todo.completed = !todo.completed;

  return new Response(JSON.stringify(todo), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
