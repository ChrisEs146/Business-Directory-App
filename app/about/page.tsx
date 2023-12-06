import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-7xl my-0 mx-auto">
      <h1 className="text-3xl font-bold my-3">About</h1>
      <div className="flex flex-wrap gap-4">
        <p className="">
          Welcome to our business directory application built on the foundations
          of Next.js, Tailwind CSS, and the Google Maps/Places API. Our mission
          is to simplify local exploration by providing a seamless user
          experience. Whether you are a foodie in search of the best local
          restaurants or a traveler in need of nearby amenities, our app has you
          covered. With a focus on simplicity and functionality, we offer a
          clean interface with a search bar for customized queries and
          predefined categories like Restaurants, Banks, Coffee Shops, Gas
          Stations, Supermarkets, and Bars. Dive deeper into the details with
          our search results page, presenting up to 20 businesses with essential
          information. Click on a business card, and a sidebar unfolds, offering
          a closer look with images, addresses, ratings, and a direct link to
          Google Maps for hassle-free navigation. Join us in exploring the
          endless possibilities our app brings to your fingertips.
        </p>
        <Image
          src="product.png"
          alt="Illustration about a page"
          width={200}
          height={200}
        />
      </div>
    </section>
  );
}
