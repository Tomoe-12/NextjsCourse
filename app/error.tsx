"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    //log the error to an error reporting service
    console.log(error);
  }, [error]);
  return (
    <div className="text-red-700">
      <h2>Something went wrong !</h2>
      <p>{error.message}</p>
      <button
        onClick={
          // Attempt to recover by trying to re-render The segment
          () => reset()
        }
      >
        Try Againg !
      </button>
    </div>
  );
}
