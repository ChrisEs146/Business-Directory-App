import Image from "next/image";
import CategoryList from "./CategoryList";
export default function Hero() {
  return (
    <section>
      <Image
        className="w-full absolute h-full opacity-50"
        src="/bg.png"
        alt="Illustration of a city at night"
        width={900}
        height={500}
      />
      <div className="text-center pt-10 isolate mb-8">
        <h1 className="text-4xl tracking-widest font-semibold text-red-500 mb-3">
          DISCOVER
        </h1>
        <h2 className="text-lg text-gray-500 mb-20">Your amazing city</h2>
        <div className="flex gap-3 items-center justify-center">
          <input
            type="text"
            placeholder="Search anything"
            className="bg-white w-[35%] p-3 border border-gray-500 px-5 rounded-full placeholder:text-gray-700 shadow-sm"
          />
          <button className="bg-red-600 rounded-full p-3 shadow-md cursor-pointer hover:scale-105 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <h2 className="text-lg text-gray-500 mt-3">Or browse the categories</h2>
      </div>
      <CategoryList />
    </section>
  );
}
