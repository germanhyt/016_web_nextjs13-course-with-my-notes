"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

// // RCC  - React Client Component
const PostCard = ({ post }) => {
  const params = useParams();

  console.log({ params });

  return (
    <div className="bg-black px-4 py-2 rounded-lg">
      <Link href={`/posts/${post.id}`}>
        <h3>
          {post.id} {post.title}
        </h3>
        <p>{post.body}</p>
      </Link>
      <button
        onClick={() => {
          alert("click funcionando");
        }}
      >
        click
      </button>
    </div>
  );
};

export default PostCard;
