import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-black text-white text-lg p-4">
      <ul className="flex gap-2">
        <li>
          <Link href={"/"} prefetch={false}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/henry"} prefetch={false}>
            Henry
          </Link>
        </li>
      </ul>
    </nav>
  );
}
