"use client";
import { useParams } from "next/navigation";

const UserPage = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h2>UserPage</h2>
      <button
        className="bg-black text-white px-2 py-1 rounded-lg"
        onClick={() => {
          alert("works");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default UserPage;
