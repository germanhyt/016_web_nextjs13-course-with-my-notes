"use client";
import React from "react";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "About Section",
// };

const AboutPage = () => {
  const router = useRouter();

  return (
    <section>
      AboutPage
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit porro
        dicta pariatur, doloribus tenetur vel nulla magni ad inventore quos enim
        voluptatum libero vero dolor praesentium accusamus ea. Culpa qui natus
        labore, inventore explicabo quae cupiditate itaque, mollitia sint
        nostrum dolore. Itaque vitae voluptates dicta ab in sed, dolorem ipsum.
      </p>
      <button
        className="py-1 px-2 bg-black rounded-lg"
        onClick={() => {
          alert("Executing the click event!");
          router.push("/"); // Redirect to the home page
        }}
      >
        Click
      </button>
    </section>
  );
};

export default AboutPage;
