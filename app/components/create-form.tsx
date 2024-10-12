import { createPost } from "@/server/action";
import React from "react";
import CustomButton from "./custom-button";

const CreateForm = () => {
  return (
    <div>
      <form action={createPost}>
        <div className="space-y-4 mt-4 ">
          <input
            placeholder="title....."
            type="text"
            name="title"
            required
            className="w-full bg-transparent border-2 border-blue-600 rounded-md focus:outline-none p-2 text-black"
          />
          <textarea
            placeholder="description"
            name="description"
            required
            className="w-full block bg-transparent border-2 border-blue-600 rounded-md focus:outline-none p-2 text-black"
          ></textarea>
        </div>
        <div className="flex justify-end mt-2">
          <CustomButton label="Create New Post" />
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
