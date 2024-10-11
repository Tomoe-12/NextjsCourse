"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const CustomButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className="border border-white p-2 block mt-2 disabled:border-gray-600 disabled:text-gray-600"
      disabled={pending}
      type="submit"
    >
      {label || "Default"}
    </button>
  );
};

export default CustomButton;
