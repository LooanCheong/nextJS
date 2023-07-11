import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <span>
        <Link className={router.pathname === "/" ? "active" : ""} href="/">
          Home
        </Link>
        <Link
          className={router.pathname === "/about" ? "active" : ""}
          href="/about"
        >
          About
        </Link>
      </span>
      <style jsx global>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
