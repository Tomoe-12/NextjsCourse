"use server";

import { todo } from "node:test";
import { db } from ".";
import { todos } from "./schema";
import { revalidate } from "@/app/page";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export const getPosts = async () => {
  const posts = await db.query.posts.findMany();

  if (!posts) {
    return { error: "No Posts ," };
  }

  return { success: posts };
};

export const createData : any = async (formData: FormData) => {
  const todoTitle = formData.get("todoTitle")?.toString();
  if (!todoTitle) {
    return { error: "no todo title found ! " };
  }

  await db.insert(todos).values({ title: todoTitle });
  revalidatePath("/");
  return { success: "todo created " };
};

export const deleteData : any = async (formData: FormData) => {
  const id = formData.get("id");
  console.log("id", id);

  if (!id) {
    return { error: "No id found " };
  }
  await db.delete(todos).where(eq(todos.id, Number(id)));
  revalidatePath("/");
  return { success: "Todo deleted " };
};

export const updateData : any = async (formData: FormData) => {
  console.log(formData);
  
  const todoTitle = formData.get("todoTitle")?.toString();
  console.log('todo title',todoTitle);
  
  if (!todoTitle) return { error: "No todo found ." };

  const id = formData.get("id");
  await db.update(todos).set({ title: todoTitle }).where(eq(todos.id, id));
  revalidatePath("/");

};
