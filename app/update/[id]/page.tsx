import CustomButton from "@/app/components/custom-button";
import { updateData } from "@/server/action";
import React, { useState } from "react";

type EditTodoProp = {
  params: {
    id: string;
  };
};
const EditTodo = ({ params }: EditTodoProp) => {
  return <main>
    <h2>update todo </h2>
    <form action={updateData}>
        <input type="hidden" name="id" value={params.id} readOnly/>
        <input type="text" name="todoTitle"  className="text-black" />
        <CustomButton label='Update Todo'/>
    </form>
  </main>
};

export default EditTodo;
