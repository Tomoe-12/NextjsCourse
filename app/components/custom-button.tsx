"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const CustomButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className="border-2 border-blue-600 text-white  bg-blue-600 text-sm font-medium rounded-md p-2 block mt-2 disabled:bg-transparent disabled:border-gray-600 disabled:text-gray-600"
      disabled={pending}
      type="submit"
    >
      {label || "Default"}
    </button>
  );
};

export default CustomButton;
