import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Navbar</h2>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/new">New Task</Link>
        </li>
        <li>
          <Link href="/tasks">Tasks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
