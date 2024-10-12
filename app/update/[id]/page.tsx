import CustomButton from "@/app/components/custom-button";
import { getPost, updatePost } from "@/server/action";
import React, { useState } from "react";

type EditTodoProp = {
  params: {
    id: number;
  };
};
const EditTodo = async ({ params }: EditTodoProp) => {
  const { success } = await getPost(params.id);
  return (
    <main>
      <h2 className="title-text mt-4">update todo </h2>
      <form action={updatePost}>
        <input type="hidden" name="id" value={params.id} readOnly />
        <div className="space-y-4 mt-4">
          <input
            placeholder="title....."
            type="text"
            name="title"
            required
            defaultValue={success?.title}
            className="w-full bg-transparent border-2 border-blue-600 rounded-md focus:outline-none p-2 text-black"
          />
          <textarea
            placeholder="description"
            name="description"
            required
            rows={7}
            defaultValue={success?.description}
            className="w-full block bg-transparent border-2 border-blue-600 rounded-md focus:outline-none p-2 text-black"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <CustomButton label="Update Post" />
        </div>
      </form>
    </main>
  );
};

export default EditTodo;
