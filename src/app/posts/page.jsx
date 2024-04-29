import PostCard from "@/components/PostCard";
import "./posts.css";

async function loadPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  // await new Promise((resolve) => {
  //   setTimeout(resolve, 4000);
  // });

  return posts;
}

// RSC - React Server Component
const page = async () => {
  const posts = await loadPosts();

  //   const posts = loadPosts().then((posts) => {
  //     return posts.map((post) => {
  //       <PostCard post={post} key={post.id} />;
  //     });
  //   });

  return (
    <div className="">
      <h3 className="mx-[20px] mt-10"> PostsPages:</h3>
      <div className="grid">
        {posts.map((post) => {
          return <PostCard post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

export default page;
