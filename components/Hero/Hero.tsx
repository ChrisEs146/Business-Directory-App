import Image from "next/image";
import Search from "../Search/Search";
import CategoryList from "../Search/CategoryList";
export default function Hero() {
  return (
    <section>
      <Image
        className="w-full absolute h-full opacity-30"
        src="/bg.png"
        alt="Illustration of a city at night"
        width={900}
        height={500}
      />
      <div className="text-center pt-10 isolate mb-8">
        <h1 className="text-4xl tracking-widest font-semibold text-red-500 mb-3">
          DISCOVER
        </h1>
        <h2 className="text-lg text-gray-700 mb-20">Your amazing city</h2>
      </div>
      <Search />
      <CategoryList />
    </section>
  );
}
