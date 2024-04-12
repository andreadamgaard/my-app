import Link from "next/link";

export default async function Header() {
  const url = "https://nice-dogs.vercel.app/api/dogs";
  const res = await fetch(url);
  const data = await res.json();

  return (
    <nav className="bg-black text-white text-lg p-4 ">
      <ul className="flex gap-5 justify-center">
        <li>
          <Link href={"/"} prefetch={false}>
            Home
          </Link>
        </li>
        {/* Vi mapper vores data, så vi kan få links til alle hunde der ligger i vores url.
        Den opretter selv alle nødvendige links som li */}
        {data.map((dogName) => (
          <li key={dogName.name}>
            <Link href={dogName.slug} prefetch={false}>
              {dogName.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
