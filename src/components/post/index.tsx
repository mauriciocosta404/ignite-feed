import React from "react";

interface PostPros {
  author: string;
  content: string;
}

export const Post: React.FC<PostPros> = ({ author, content }) => {
  return (
    <>
      <strong>{author}</strong>
      <p>{content}</p>
    </>
  );
};
