import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Categories Section",
};

const categoriesPage = () => {
  return (
    <div>
      categoriesPage
      <ul>
        <li>
          <Link href="/shop/categories/computer">Computer</Link>
        </li>
      </ul>
    </div>
  );
};

export default categoriesPage;
