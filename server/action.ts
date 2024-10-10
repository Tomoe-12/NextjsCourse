"use server";

import { todo } from "node:test";
import { db } from ".";

export const readData = async () => {
  const todos = await db.query.todos.findMany();

  if (!todos) {
    return { error: "No todos ," };
  }

  return { success: todos };
};
