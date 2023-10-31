import { categories } from "./Constants";
import Image from "next/image";
export default function CategoryList() {
  return (
    <div className="flex gap-8 justify-center items-center isolate">
      {categories.map((category) => (
        <button
          key={category.id}
          className="bg-white text-black border-[2px] p-4 rounded-full shadow-md hover:scale-90 hover:border-red-500 transition-all"
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
  );
}
