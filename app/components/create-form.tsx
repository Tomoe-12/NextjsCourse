import { createData } from "@/server/action";
import React from "react";
import CustomButton from "./custom-button";

const CreateForm = () => {
  return (
    <div>
      <form action={createData}>
        <div className="space-y-4 mt-4 ">
          <input
            placeholder="title....."
            type="text"
            name="todoTitle"
            required
            className="bg-transparent border-2 border-blue-600 rounded-md focus:outline-none p-2 text-black"
          />
          <input
            placeholder="description"
            type="text"
            name="description"
            required
            className="block bg-transparent border-2 border-blue-600 rounded-md focus:outline-none p-2 text-black"
          />
        </div>
        <CustomButton label="Create New Todo" />
      </form>
    </div>
  );
};

export default CreateForm;
