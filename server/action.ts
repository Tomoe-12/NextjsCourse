"use server";

import { todo } from "node:test";
import { db } from ".";
import { posts, todos } from "./schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const getPosts = async () => {
  const posts = await db.query.posts.findMany();

  if (!posts) {
    return { error: "No Posts ," };
  }

  return { success: posts };
};

export const getPost = async (id: number) => {
  const post = await db.query.posts.findFirst({ where: eq(posts.id, id) });
  console.log(post);

  if (!post) {
    redirect("/");
    // return { error: "No Post found" };
  }

  return { success: post };
};

export const createPost: any = async (formData: FormData) => {
  console.log(formData);

  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  if (!title || !description) {
    return { error: "invalid data format" };
  }

  await db.insert(posts).values({ title, description });
  revalidatePath("/");
  redirect("/");
  return { success: "Posts created " };
};

export const deletePost: any = async (formData: FormData) => {
  const id = formData.get("id");
  console.log("id", id);

  if (!id) {
    return { error: "No id found " };
  }
  await db.delete(posts).where(eq(posts.id, Number(id)));
  revalidatePath("/");
  redirect("/");
};

export const updatePost: any = async (formData: FormData) => {
  console.log(formData);

  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  console.log("Title", title);

  if (!title || !description) return { error: "title and description not found ! " };

  const id = formData.get("id");
  await db
    .update(posts)
    .set({ title , description })
    .where(eq(posts.id, Number(id)));
  revalidatePath("/");
  redirect("/");
};
