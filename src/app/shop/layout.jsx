import Link from "next/link";

// Metadata
export const metadata = {
  title: "Shop Section",
  description: "Esta es la página de inicio de mi tienda en Nextjs",
  keywords: "Nextjs, Tienda, E-commerce",
};

const layout = ({ children }) => {
  return (
    <div>
      <h3>Seccion Tienda</h3>

      <nav>
        <ul>
          <li>
            <Link href="/shop/categories">Categories</Link>
          </li>
          <li>
            <Link href="/shop/categories/computer">Computer</Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
};

export default layout;
