import Link from "next/link";

export const metadata = {
  //det der normalt står i vores header skriver vi ind her
  title: "Frontpage",
  description: "Desc",
};

export default function Home() {
  return (
    <main>
      <h1>Hej med dig...</h1>
      {/* prefetch = at den ikke automatisk loader linket når vi kan se det. Først når vi klikker på det */}
      <Link href={"/henry"} prefetch={false}>
        Henry
      </Link>
    </main>
  );
}
