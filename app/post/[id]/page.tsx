import {  deletePost, getPost } from "@/server/action";
import Link from "next/link";
import React from "react";

type PostProp = {
  params: {
    id: number;
  };
};

const Post = async ({ params }: PostProp) => {
  const { success } = await getPost(params.id);
  const { description, id, title } = success;
  console.log("success page ", success);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="text-gray-500">{description}</p>
      <div className="flex gap-4 mt-4 flex-row-reverse w-fit">
        <form action={deletePost}>
          <input type="hidden" name="id" value={id} readOnly />
          <button
            className="bg-red-600 text-sm font-medium text-white p-2 rounded-md"
            type="submit"
          >
            Delete Post
          </button>
        </form>
        <Link
          href={`/update/${id}`}
          className="bg-blue-600 text-sm font-medium text-white p-2 rounded-md"
        >
          Edit Post
        </Link>
      </div>
    </div>
  );
};

export default Post;
