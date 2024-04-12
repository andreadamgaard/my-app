import Link from "next/link";
//Gør så vi får et nyt billede hver gang vi refresher siden
export const dynamic = "force-dynamic";

export const metadata = {
  //det der normalt står i vores header skriver vi ind her
  title: "Frontpage",
  description: "Desc",
};

export default async function Home() {
  const url = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(url);
  const data = await res.json();

  return (
    <main className="grid justify-center text-center">
      <h1 className="text-xl font-bold">Welcome to the dogs...</h1>
      {/* prefetch = at den ikke automatisk loader linket når vi kan se det. Først når vi klikker på det */}
      <Link href={"/henry"} prefetch={false}>
        Henry
      </Link>
      <h2 className="p-2">Look at that dog</h2>
      <img src={data.message} alt="random dog" />
    </main>
  );
}
