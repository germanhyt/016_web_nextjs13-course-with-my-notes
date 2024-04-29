import Posts from "../page";
import { Suspense } from "react";

const loadPosts = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posts = await res.json();
  return posts;
};

const Page = async ({ params }) => {
  const posts = await loadPosts(params.postsid);

  return (
    <div className="">
      Post Page - {params.postsid}
      <h1>
        {posts.id} {posts.title}
      </h1>
      <p>{posts.body}</p>
      <hr />
      <h3>Otras Publicaciones</h3>
      <Suspense fallback={<div>Cargando publicaiones...</div>}>
        <Posts />
      </Suspense>
    </div>
  );
};

export default Page;
