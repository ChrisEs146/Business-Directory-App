"use client";
import { categories } from "./Constants";
import Image from "next/image";
import { MouseEvent } from "react";
import { useRouter } from "next/navigation";

export default function CategoryList() {
  const router = useRouter();
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    router.push(`/search?query=${name}`);
  };

  return (
    <div className="text-center isolate">
      <h2 className="text-lg text-gray-800 mt-3 mb-5">
        Or browse the categories
      </h2>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {categories.map((category) => (
          <button
            onClick={handleButtonClick}
            type="button"
            key={category.id}
            name={category.value}
            className="bg-white text-black border-[2px] p-3 rounded-full shadow-md hover:scale-90 hover:border-red-500 transition-all"
          >
            <Image
              src={category.img}
              alt={category.description}
              title={category.name}
              width={28}
              height={28}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
