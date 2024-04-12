//Importer billede
import Image from "next/image";

//Vi henter vores information
async function getHenry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return data;
}

export async function generateMetadata() {
  const { name, age } = await getHenry();
  return {
    title: name,
    description: `${name} is ${age} years old`,
  };
}

//Vi bygger vores component
export default async function HenryPage() {
  const data = await getHenry();
  const { name } = data;

  return (
    <main className=" md:flex max-w-7xl mx-auto">
      <Image
        src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
        alt="A cute dog"
        width={3024}
        height={4032}
        priority={true} // disables lazy load
        className=" w-full md:w-1/2 lx:w-[600px]"
        sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         600px"
      />
      <div className="p-4 ">
        <h1 className="text-lg">Hej jeg hedder {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi aliquid nemo adipisci cumque obcaecati blanditiis quasi minima magnam! Aut necessitatibus soluta hic iusto? Itaque placeat ducimus inventore voluptate excepturi.</p>
      </div>
    </main>
  );
}
