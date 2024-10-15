import { getPosts } from "@/server/action";
import { todo } from "node:test";
import CustomButton from "./components/custom-button";
import Link from "next/link";
import BlogCard from "./components/blog-card";
import CreateForm from "./components/create-form";

export const revalidate = 5; // 5 second
// export const dynamic = 'force-dynamic'

export default async function Home() {
  const { error, success } = await getPosts();
  if (error) {
    throw new Error(error);
  }
  // console.log(success);

  return (
    <main className="mt-4">
      <h1 className="title-text mb-4">Recent Blogs</h1>
      {success?.length == 0 && (
        <p className="text-sm font-medium">No Posts to show </p>
      )}
      {success?.map((post) => (
        <BlogCard
          id={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
      <div className="mt-2"></div>
    </main>
  );
}
