"use client";
import { useState } from "react";

// export const revalidate = 60;
export const dynamic = "force-dynamic";

const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="container mx-auto">
      <h1>HomePage</h1>
      <div>Users</div>;
      <button
        className="px-2 py- bg-black rounded-lg"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click {count}
      </button>
    </section>
  );
};

export default HomePage;
