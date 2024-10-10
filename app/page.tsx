import { readData } from "@/server/action";
import { todo } from "node:test";

export const revalidate = 5; // 5 second
// export const dynamic = 'force-dynamic'

export default async function Home() {
  const { error, success } = await readData();
  if (error) {
    throw new Error(error);
  }
  console.log(success);

  return (
    <div>
      <h1>Todos</h1>
      {success?.map((todo) => (
          <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}
