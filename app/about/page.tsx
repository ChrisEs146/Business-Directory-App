import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-7xl my-0 mx-auto p-3">
      <h1 className="text-3xl font-bold my-3 text-red-500">About</h1>
      <div className="flex flex-col gap-4 justify-between items-center md:flex-row">
        <p className="flex-1">
          The business directory application built with Next.js, Tailwind CSS,
          and the Google Maps/Places API. With a focus on simplicity and
          functionality, we offer a clean interface with a search bar for
          customized queries and predefined categories like Restaurants, Banks,
          Coffee Shops, Gas Stations, Supermarkets, and Bars. Dive deeper into
          the details with our search results page, presenting up to 20
          businesses with essential information. Click on a business card, and a
          sidebar unfolds, offering a closer look with images, addresses,
          ratings, and a direct link to Google Maps for hassle-free navigation.
          Join us in exploring the endless possibilities our app brings to your
          fingertips.
        </p>
        <Image
          className="h-auto w-full max-w-2xl flex-1"
          src="/product.png"
          alt="Illustration about a page"
          width={200}
          height={200}
          title="Illustration of a person looking to an information board"
        />
      </div>
    </section>
  );
}
