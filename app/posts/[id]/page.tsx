import React from "react";
type PostProps = {
  params: {
    id: string;
  };
};
const Post = ({ params }: PostProps) => {
  return (
    <div>
      <h2>Post id : {params.id}</h2>
      <p className="text-yellow-400">{Date.now()}</p>
    </div>
  );
};

export default Post;
