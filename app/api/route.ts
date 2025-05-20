
import { todos } from './db'

export async function GET() {
  return new Response(JSON.stringify(todos));
}

export async function POST(request: Request) {
  const body = await request.json();

  const newTodo = {
    id: todos.length + 1,
    title: body.title,
    description: body.description,
    completed: false,
    due: body.due
  };

  todos.push(newTodo);

  return new Response(JSON.stringify(newTodo));
}
