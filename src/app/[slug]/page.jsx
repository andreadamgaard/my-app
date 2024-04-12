//hvis url ikke findes får vi not found frem
import { notFound } from "next/navigation";

//Husk at importere billeder her:
import Image from "next/image";

import { getAllDogs, getDogBySlug } from "@/lib/dogAPI";

// [slug]/page.js
export async function generateStaticParams() {
  const pages = await getAllDogs();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  const data = await getDogBySlug(slug);

  //if (data.message) return notFound();

  return {
    title: data.name,
    description: `Here is ${data.name}`,
  };
}

export default async function DogPage({ params }) {
  // vores slug her sørger for vores h1 har samme navn som vores url
  const { slug } = params;
  //vi henter vores url med slug

  const data = await getDogBySlug(slug);
  //nemmere måde at se den specifikke data vi gerne vil se. Mere overskuelig
  console.log({ data });
  //Vi bruger not found
  if (data.message) return notFound();

  return (
    <section className="md:flex max-w-7xl mx-auto">
      <Image
        src={data.image.url}
        alt="A cute dog"
        width={data.image.width}
        height={data.image.height}
        priority={true} // disables lazy load
        className=" pr-4 w-full md:w-1/2 lx:w-[600px]"
        sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         1000px"
      />
      <article>
        <h1>Hi! My name is {data.name}</h1>
        <h2>I love the color {data.favouriteColor}</h2>
        <p>
          I am {data.age} {data.age == "1" ? "year" : "years"} old.
        </p>
      </article>
    </section>
  );
}
