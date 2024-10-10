"use server";

import { todo } from "node:test";
import { db } from ".";
import { todos } from "./schema";
import { revalidate } from "@/app/page";
import { revalidatePath } from "next/cache";

export const readData = async () => {
  const todos = await db.query.todos.findMany();

  if (!todos) {
    return { error: "No todos ," };
  }

  return { success: todos };
};

export const createData = async (formData: FormData) => {
    const todoTitle = formData.get('todoTitle')?.toString()
    if(!todoTitle){
        return {error : 'no todo title found ! '}
    }

    await db.insert(todos).values({title : todoTitle})
    revalidatePath('/')
    return {success : 'todo created '}
};
