import { deleteData } from "@/server/action";
import Link from "next/link";
import React from "react";

type BlogCardProps = {
    id : number ,
    title : string
}
const BlogCard = ({id,title} : BlogCardProps ) => {
  return (
    <div key={id}>
      <p>{title}</p>
      <form action={deleteData}>
        <input type="hidden" name="id" value={id} readOnly />
        <button className="text-red-600 border border-red-600" type="submit">
          Delete
        </button>
      </form>
      <Link href={`/update/${id}`} className="underline text-green-600">
        Edit
      </Link>
    </div>
  );
};

export default BlogCard;
